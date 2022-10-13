const diskLogic = require("logic/disk.js");

function statusJson(name) {
    return diskLogic.readJsonFile(name + '-status.json')
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
