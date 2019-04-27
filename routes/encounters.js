const express = require('express');
const router = express.Router();

/**
 * GET - collection of Encounters
 */
router.get('/', (req, res) => {
    res.status(200).send('Collection of Encounters');
});

module.exports = router;
