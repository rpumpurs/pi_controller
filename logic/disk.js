const path = require('path');

const constants = require('utils/const.js');
const diskService = require('services/disk.js');

async function deleteItemsInDir(directory) {
  return await diskService.deleteItemsInDir(directory);
}

async function deleteFoldersInDir(directory) {
  await diskService.deleteFoldersInDir(directory);
}

async function fileExists(path) {
  return diskService.readJsonFile(path)
    .then(() => Promise.resolve(true))
    .catch(() => Promise.resolve(false));
}

async function moveFoldersToDir(fromDir, toDir) {
  await diskService.moveFoldersToDir(fromDir, toDir);
}

async function shutdown() {
  await diskService.writeFile(constants.SHUTDOWN_SIGNAL_FILE, 'true');
}

async function reboot() {
  await diskService.writeFile(constants.REBOOT_SIGNAL_FILE, 'true');
}

// Read the contends of a file.
async function readUtf8File(path) {
  return await diskService.readUtf8File(path);
}

// Read the contents of a file and return a json object.
async function readJsonFile(path) {
  return await diskService.readJsonFile(path);
}

function readDebugStatusFile() {
  return diskService.readJsonFile(constants.DEBUG_STATUS_FILE);
}

// TODO: Transition all logic to use this signal function
function writeSignalFile(signalFile, args) {
  if(!/^[0-9a-zA-Z-_]+$/.test(signalFile)) {
    throw new Error('Invalid signal file characters');
  }

  const signalFilePath = path.join(constants.SIGNAL_DIR, signalFile);
  return diskService.writeFile(signalFilePath, args);
}

// TODO: Transition all logic to use this status function
function writeStatusFile(statusFile, contents) {
  if(!/^[0-9a-zA-Z-_]+$/.test(statusFile)) {
    throw new Error('Invalid signal file characters');
  }

  const statusFilePath = path.join(constants.STATUS_DIR, statusFile);
  return diskService.writeFile(statusFilePath, contents);
}

function readSystemStatusFile(resource) {
  const statusFilePath = path.join(constants.STATUS_DIR, `${resource}-status.json`);
  return diskService.readJsonFile(statusFilePath)
    .catch(() => null);
}

function statusFileExists(statusFile) {
  if(!/^[0-9a-zA-Z-_]+$/.test(statusFile)) {
    throw new Error('Invalid signal file characters');
  }

  const statusFilePath = path.join(constants.STATUS_DIR, statusFile);
  return diskService.readUtf8File(statusFilePath)
    .then(() => Promise.resolve(true))
    .catch(() => Promise.resolve(false));
}

function deleteStatusFile(statusFile) {
  if(!/^[0-9a-zA-Z-_]+$/.test(statusFile)) {
    throw new Error('Invalid signal file characters');
  }

  const statusFilePath = path.join(constants.STATUS_DIR, statusFile);
  return diskService.deleteFile(statusFilePath);
}

module.exports = {
  deleteItemsInDir,
  deleteFoldersInDir,
  moveFoldersToDir,
  fileExists,
  shutdown,
  reboot,
  readUtf8File,
  readJsonFile,
  readDebugStatusFile,
  writeSignalFile,
  writeStatusFile,
  readSystemStatusFile,
};
