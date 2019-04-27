const express = require('express');
const router = express.Router();

/**
 * GET - collection of Memberships
 */
router.get('/', (req, res) => {
    res.status(200).send('Collection of Memberships');
});

module.exports = router;
