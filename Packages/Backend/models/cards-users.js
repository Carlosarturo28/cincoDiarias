const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const cardUserSchema = new Schema({
  userId: { type: String },
  cardId: { type: String },
  saved: { type: Boolean },
});

const CardUser = mongoose.model('CardUser', cardUserSchema);

module.exports = CardUser;
