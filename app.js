require('module-alias/register');
require('module-alias').addPath('.');
const express = require('express');
const appResolver = require('utils/appResolver.js');

const errorHandleMiddleware = require('middlewares/errorHandling.js');

const ping = require('routes/ping.js');
const system = require('routes/v1/system.js');

const app = express();

if (appResolver.APP_FRONTEND_PATH) {
  app.use(express.static(appResolver.APP_FRONTEND_PATH));
}

app.use('/ping', ping);
app.use('/api/v1/system', system);

app.use(errorHandleMiddleware);
app.use((req, res) => {
  res.status(404).json(); // eslint-disable-line no-magic-numbers
});

module.exports = app;
