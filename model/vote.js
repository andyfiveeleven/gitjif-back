'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = Schema({
  vote: { type: Boolean, required: true} //true for gif false for jif
});

module.exports = mongoose.model('list', voteSchema);
