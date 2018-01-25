const express = require('express');

const router = express.Router();
const Card = require('./models/cards');
const User = require('./models/users');
const CardUser = require('./models/cards-users');

router.param('cardId', (req, res, next, id) => {
  Card.findById(id, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('No existe esa tarjeta');
      err.status = 404;
      return next(err);
    }
    req.card = doc;
    return next();
  });
});

// Endopoint para la creación de usuarios
router.post('/createUser', (req, res) => {
  const user = new User({
    user: req.body.user,
  });
  console.log(req.body.user);
  user.save((err, userInstance) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(userInstance);
  });
});

// Endopoint para la asociación de usuario y tarjeta
router.post('/asociar', (req, res) => {
  User.findOne({ user: req.body.userId })
    .then(user => user.id)
    .then((id) => {
      console.log(`userid ${id}`);
      const cardUser = new CardUser({
        userId: id,
        cardId: req.body.cardId,
        saved: req.body.saved,
      });
      cardUser.save((err, cardUserInstance) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(cardUserInstance);
      });
    });
});

// Endpoint para consultar las tarjetas asociadas a un usuario
router.get('/getSavedCards/:userId', (req, res, next) => {
  console.log(`user id ${req.params.userId}`);
  User.findOne({ user: req.params.userId })
    .then(user => user.id)
    .then((id) => {
      CardUser.find({ userId: id, saved: true })
        .then((rows) => {
          const cardIds = rows.map(item => item.cardId);
          return cardIds;
        })
        .then((cardIds) => {
          const cards = cardIds.map(async (item) => {
            let card = null;
            try {
              card = await Card.findById(item);
            } catch (error) {
              next(error);
            }
            return card;
          });
          return Promise.all(cards);
        })
        .then(cards => res.json(cards))
        .catch(err => next(err));
    })
    .catch((err) => {
      next(err);
    });
});

// Endpoint para saber cuáles cards ha visto el usuario y retornar las que no ha visto
router.get('/cards/:userId', (req, res, next) => {
  if (!req.params.userId) {
    res.status(400).send({ error: 'El userId es necesario' });
    res.end();
  } else {
    let cards;
    Card.find({})
      .then((rows) => {
        cards = rows;
      })
      .then(() => {
        User.findOne({ user: req.params.userId })
          .then(user => user.id)
          .then((id) => {
            CardUser.find({ userId: id })
              .then((rows) => {
                const cardIds = rows.map(item => item.cardId);
                return cardIds;
              })
              .then((cardIds) => {
                console.log(`cardIds ${cardIds.toString()}`);
                const validateId = (cardId, ids) => {
                  let value = false;
                  ids.forEach((item) => {
                    if (item === cardId) value = true;
                  });
                  return value;
                };
                const cardsToView = cards.map((item) => {
                  if (!validateId(item.id, cardIds)) return item;
                  return null;
                }).filter(item => item !== null);
                res.json(cardsToView.slice(0, 5));
              })
              .catch(err => next(err));
          })
          .catch(err => next(err));
      })
      .catch(err => next(err));
  }
});

// Endopoint para la creación de tarjetas
router.post('/createCard', (req, res) => {
  const card = new Card({
    word: req.body.word,
    description: req.body.description,
    example: req.body.example,
    grammar: req.body.grammar,
  });
  card.save((err, cardInstance) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(cardInstance);
  });
});


// Endpoint para acceder a una tarjeta con su ID
router.get('/:cardId', (req, res) => {
  res.json(req.param.cardId);
});

module.exports = router;
