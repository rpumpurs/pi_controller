const path = require("path");
const absolutePath = path.resolve('./');
const appResolver = require('utils/appResolver.js');

module.exports = {
  SIGNAL_DIR: (appResolver.APP_EVENTS_PATH || absolutePath + '/scripts/events') + '/signals/',
  STATUS_DIR: absolutePath + '/scripts/statuses/',
  STATUS_CODES: {
    ACCEPTED: 202,
    BAD_GATEWAY: 502,
    CONFLICT: 409,
    FORBIDDEN: 403,
    OK: 200,
    UNAUTHORIZED: 401
  },
};
