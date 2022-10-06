const constants = require('utils/const.js');
const diskLogic = require("logic/disk.js");

function statusJson(name) {
    // TODO validate name
    return diskLogic.readJsonFile(constants.STATUS_DIR + name + '-status.json')
}

function command(name, args) {
    let argValues = [];
    for (let i in args) {
        argValues.push(args[i]);
    }

    return diskLogic.writeSignalFile(name, argValues.join(' '));
}

module.exports = {
    statusJson,
    command,
};
