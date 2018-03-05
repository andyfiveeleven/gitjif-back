'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const debug = require('debug')('vote:voteList');
const createError = require('http-erros');
const Vote = require('./vote.js');

const voteListSchema = Schema({
  notes: [{ type: Schema.Types.ObjectId, ref: 'vote'}]
});
