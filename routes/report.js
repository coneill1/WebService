const express = require('express');
const router = express.Router();

/**
 * GET - single Report
 */
router.get('/', (req, res) => {
    res.status(200).send('Report');
});


module.exports = router;
