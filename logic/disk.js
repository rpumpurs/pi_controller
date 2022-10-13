const path = require('path');

const constants = require('utils/const.js');
const diskService = require('services/disk.js');

async function readJsonFile(path) {
  return await diskService.readJsonFile(constants.STATUS_DIR + path);
}

function writeSignalFile(signalFile, args) {
  if(!/^[0-9a-zA-Z-_]+$/.test(signalFile)) {
    throw new Error('Invalid signal file characters');
  }

  const signalFilePath = path.join(constants.SIGNAL_DIR, signalFile + '.signal');
  return diskService.writeFile(signalFilePath, args);
}

module.exports = {
  readJsonFile,
  writeSignalFile,
};
