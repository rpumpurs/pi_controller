/**
 * Generic disk functions.
 */

const fs = require('fs');

// Reads a file. Wraps fs.readFile into a native promise
function readFile(filePath, encoding) {
  return new Promise((resolve, reject) => fs.readFile(filePath, encoding, (err, str) => {
    if (err) {
      reject(err);
    } else {
      resolve(str);
    }
  }));
}

// Reads a file as a utf8 string. Wraps fs.readFile into a native promise
async function readUtf8File(filePath) {
  return (await readFile(filePath, 'utf8')).trim();
}

async function readJsonFile(filePath) {
  return readUtf8File(filePath).then(JSON.parse);
}

// Writes a string to a file. Wraps fs.writeFile into a native promise
// This is _not_ concurrency safe, so don't export it without making it like writeJsonFile
function writeFile(filePath, data, encoding) {
  return new Promise((resolve, reject) => fs.writeFile(filePath, data, encoding, err => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  }));
}

module.exports = {
  readJsonFile,
  writeFile,
};
