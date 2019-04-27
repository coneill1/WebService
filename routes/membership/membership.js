const express = require('express');
const router = express.Router();
const periodRouter = require('./period.js');

/**
 * GET - single Membership
 * @param id - id of Membership
 */
router.get('/:id', (req, res) => {
    res.status(200).send('Membership');
});

/**
 * CU - single Membership
 */
router.route('/')
    .put((req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
    });

/**
 * GET - collection of IdCards for a given Membership
 * @param id - id of Membership
 */
router.get('/:id/idCards', (req, res) => {
    res.status(200).send('Collection of IdCards')
});

/**
 * GET - single IdCard of a Membership
 * @param id - id of Membership
 * @param qrCode - QR Code of IdCard
 */
router.get('/:id/idCard/:qrCode', (req, res) => {
    res.status(200).send('IdCard');
});

/**
 * CUD - single IdCard of a given Membership
 * @param id - id of Membership
 */
router.route('/:id/idCard')
    .put((req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
    })
    .delete((req, res) => {
        res.sendStatus(200);
    });

// router.use(periodRouter);

module.exports = router;
