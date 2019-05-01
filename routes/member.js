const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Member = require('../models/member.js');
const ContactInfo = require('../models/contactInfo.js');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


/**
 * CU - single Member
 */
router.route('/')
    .put(async (req, res) => {
        res.sendStatus(200);
    })
    .post((req, res) => {
        res.sendStatus(200);
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

