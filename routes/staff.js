const express = require('express');
const router = express.Router();

/**
 * GET - collection of Staff members
 */
router.get('/', (req, res) => {
    res.status(200).send('Collection of Staff');
});

/**
 * CRUD - single staff
 * @param id - the id of the Staff member
 */
router.route('/:id')
    .get((res, req) => {

    })
    .put((req, res) => {

    })
    .post((req, res) => {

    })
    .delete((req, res) => {

    });


module.exports = router;
