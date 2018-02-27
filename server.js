'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const debug = require('debug')('gifjif:server');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/gifjif';
mongoose.connect(MONGODB_URI); //these two lines connect us to the database

app.listen(PORT, () =>{
  debug(`listening on ${PORT}`)
})
