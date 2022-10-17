const path = require("path");
const absolutePath = path.resolve('./');
require('dotenv').config();

module.exports = {
  SIGNAL_DIR: (process.env.EVENTS_PATH || absolutePath + '/scripts/events') + '/signals/',
  STATUS_DIR: process.env.STATUS_DIR || absolutePath + '/scripts/statuses/',
  STATUS_CODES: {
    ACCEPTED: 202,
    BAD_GATEWAY: 502,
    CONFLICT: 409,
    FORBIDDEN: 403,
    OK: 200,
    UNAUTHORIZED: 401
  },
};
