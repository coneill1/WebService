const express = require('express');
const router = express.Router();

/**
 * GET - collection of Members
 */
router.get('/', (req, res) => {
    res.status(200).send('Collection of Members');
});


module.exports = router;
