'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const Vote = require('../model/vote.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.Promise = Promise;
require('../server.js');

const url = `http://localhost:${PORT}`;
const exampleVote = {
  vote: 'soft g'
}

describe('Vote Routes', function(){
  describe('POST: /api/vote', function(){
    describe('with a valid req body', function() {
      after( done =>{
        if(this.tempVote){
          Vote.remove({})
          .then( () => done())
          .catch(done);
          return;
        }
        done();
      });

      it('should return a vote', done => {
        request.post(`${url}/api/vote`)
        .send(exampleVote)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.vote).to.equal('soft g');
          this.tempVote = res.body;
          done();
        });
      });
    });
  });
});
