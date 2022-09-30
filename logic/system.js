const constants = require('utils/const.js');
const diskLogic = require("logic/disk.js");

function changeVolume(sink, volume) {
    return diskLogic.writeSignalFile(constants.VOLUME_SIGNAL_FILE, sink + ' ' + volume);
}

module.exports = {
    changeVolume,
};
