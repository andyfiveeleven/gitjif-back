'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('gifjif:vote-route');
const Vote = require('../model/vote.js');
const voteRouter = module.exports = new Router();

voteRouter.post('/api/vote', jsonParser, function(req, res, next) {
  debug('POST: /api/vote');

  new Vote(req.body).save()
  .then( vote => res.json(vote))
  .catch(next);
});

voteRouter.get('/api/vote/:id', function(req, res, next) {
  debug('GET: /api/note');

  Vote.findById(req.params.id)
  .then( vote => res.json(vote))
  .catch(next);
});
