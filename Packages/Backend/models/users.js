const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
