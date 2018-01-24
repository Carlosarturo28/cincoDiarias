const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const cardSchema = new Schema({
  word: { type: String },
  description: { type: String },
  example: { type: String },
  grammar: { type: String },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
