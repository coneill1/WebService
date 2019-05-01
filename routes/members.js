const express = require('express');
const router = express.Router();

const memberService = require('../services/memberService.js');

const handleError = (req, res, error) => {
    res.error.detail = error.detail;
    return res.error.send(error.statusCode, error.message);
};

/**
 * GET - collection of Members
 */
router.get(['/', '/id=:id'], async (req, res) => {
    try {
        const filter = req.headers['x-filter'];
        const data = await memberService.getMembers(!!filter ? JSON.parse(filter) : null);
        res.status(200).json(data);
    } catch (e) {
        handleError(req, res, e);
    }
});


module.exports = router;
