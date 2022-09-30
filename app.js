require('module-alias/register');
require('module-alias').addPath('.');

const express = require('express');
const path = require('path');

const errorHandleMiddleware = require('middlewares/errorHandling.js');

const ping = require('routes/ping.js');
const system = require('routes/v1/system.js');

const app = express();

app.use('/ping', ping);
app.use('/v1/system', system);

app.use(errorHandleMiddleware);
app.use((req, res) => {
  res.status(404).json(); // eslint-disable-line no-magic-numbers
});

module.exports = app;
