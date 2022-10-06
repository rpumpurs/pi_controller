const express = require('express');
const router = express.Router();

const systemLogic = require('logic/system.js');

const constants = require('utils/const.js');
const safeHandler = require('utils/safeHandler');

router.get('/status.json', safeHandler(async (req, res) => {
    // TODO handle additional params
    const info = await systemLogic.statusJson(req.query.name);

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

// TODO post
router.get('/command', safeHandler(async (req, res) => {
    // TODO validate params
    let name = req.query.name
    let params = req.query;
    delete req.query['name'];
    const info = await systemLogic.command(name, req.query);

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

module.exports = router;
