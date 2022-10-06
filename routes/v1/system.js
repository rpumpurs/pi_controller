const express = require('express');
const router = express.Router();

const systemLogic = require('logic/system.js');

const constants = require('utils/const.js');
const safeHandler = require('utils/safeHandler');

router.get('/sinks', safeHandler(async (req, res) => {
    const info = await systemLogic.listSinks();

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

// TODO post
router.get('/volume', safeHandler(async (req, res) => {
    const info = await systemLogic.changeVolume(req.query.sink, Math.min(parseInt(req.query.volume), 100));

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

module.exports = router;
