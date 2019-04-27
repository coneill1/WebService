const express = require('express');
const router = express.Router();

/**
 * GET - single Encounter
 * @param id - id of the Encounter
 */
router.get('/:id', (req, res) => {
    res.status(200).send('Encounter');
});

/**
 * CU - single Encounter
 */
router.route('/')
    .put((req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
    });

/**
 * GET - collection of Attendees of an Encounter
 */
router.get('/attendees', ((req, res) => {
    res.status(200).send('Collection of Attendees');
}));

/**
 * GET - single Attendee of an Encounter
 * @param id - id of the Attendee
 */
router.get('/attendee/:id', ((req, res) => {
    res.status(200).send('Attendee');
}));

//TODO: Are Attendees only referring to NonMembers?

module.exports = router;
