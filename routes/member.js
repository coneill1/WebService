const express = require('express');
const router = express.Router();


/**
 * GET - collection of Members
 */
router.route('/')
    .put((req, res) => {

    })
    .post((req, res) => {

    });

/**
 * GET - single Member
 * @param id - id of the Member
 */
router.get('/:id', (req, res) => {
    res.status(200).send('Member')
});

/**
 * CRUD - single ContactInformation of a Member
 * @param id - id of the Member
 */
router.route('/:id/contact')
    .get((req, res) => {
        res.status(200).send('Contact Information');
    })
    .put((req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
    })
    .delete((req, res) => {
        res.sendStatus(200);
    });


module.exports = router;

