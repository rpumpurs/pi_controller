const fs = require("fs");

let folders = fs.readdirSync(__dirname + '/../app', { withFileTypes: true })
    .filter((item) => item.isDirectory() || item.isSymbolicLink())
    .map((item) => item.name);

module.exports = {
  APP_FRONTEND_PATH: (folders.length > 0) ? 'app/' + folders[0] + '/frontend/dist/' : null,
  APP_STATUS_PATH: (folders.length > 0) ? 'app/' + folders[0] + '/status/' : null,
  APP_EVENTS_PATH: (folders.length > 0) ? 'app/' + folders[0] + '/events/' : null,
};
