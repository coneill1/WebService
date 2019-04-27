const express = require('express');
const router = express.Router();

/**
 * GET - single DriverToMembership
 * @param id - id of the DriverToMembership
 */
router.get('/:id', (req, res) => {
    res.status(200).send('Collection of Members');
});

/**
 * CU - single DriverToMembership
 */
router.route('/')
    .put((req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
    });


module.exports = router;
