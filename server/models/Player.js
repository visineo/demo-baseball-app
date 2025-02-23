const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerId: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  hitsPerSeason: Number,
  rank: Number,
  description: String,
});

module.exports = mongoose.model('Player', playerSchema);

