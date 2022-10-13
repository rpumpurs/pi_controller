const express = require('express');
const router = express.Router();

const systemLogic = require('logic/system.js');

const constants = require('utils/const.js');
const safeHandler = require('utils/safeHandler');

const namePattern = /^[a-z0-9-]*$/;

router.get('/status.json', safeHandler(async (req, res) => {
    if (!namePattern.test(req.query.name)) {
        throw new Error('Invalid name');
    }

    const info = await systemLogic.statusJson(req.query.name);

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

router.get('/command', safeHandler(async (req, res) => {
    if (!namePattern.test(req.query.name)) {
        throw new Error('Invalid name');
    }
    let name = req.query.name
    delete req.query['name'];
    const info = await systemLogic.command(name, req.query);

    return res.status(constants.STATUS_CODES.OK).json(info);
}));

module.exports = router;
