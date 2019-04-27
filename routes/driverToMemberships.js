const express = require('express');
const router = express.Router();

/**
 * GET - collection of DriverToMemberships
 */
router.get('/', (req, res) => {
    res.status(200).send('Collection of DriverToMemberships');
});


module.exports = router;
