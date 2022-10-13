
const logger = require('utils/logger.js');

function handleError(error, req, res, next) {

  var statusCode = error.statusCode || 500;
  var route = req.url || '';
  var message = error.message || '';

  logger.error(message, route, error.stack);

  res.status(statusCode).json("Something broke");
}

module.exports = handleError;
