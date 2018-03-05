'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = Schema({
  vote: { type: String, required: true}, //true for gif false for jif
  voteID: { type: Schema.Types.ObjectId, require: true}
});

module.exports = mongoose.model('vote', voteSchema);
