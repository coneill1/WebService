const express = require('express');
const router = express.Router();

/**
 * GET - collection of MembershipPeriods of a given Membership
 */
router.get('/periods', (req, res) => {

});

/**
 * GET - single MembershipPeriod of a given Membership
 * @param id - the id of the MembershipPeriod
 */
router.get('/period/:id', (req, res) => {

});

/**
 * CU - single MembershipPeriod of a Membership
 */
router.route('/period')
    .put((req, res) => {

    })
    .post((req, res) => {

    });

/**
 * GET - collection of Suspensions of a given Membership
 */
router.get('/suspensions', (req, res) => {

});

/**
 * GET - single Suspension of a given Membership
 * @param id - id of the Suspension
 */
router.get('/suspension/:id', (req, res) => {

});

/**
 * CU - single Suspension of a given Membership
 */
router.route('/suspension')
    .put((req, res) => {

    })
    .post((req, res) => {

    });

/**
 * GET - collection of RenewalNotices
 */
router.get('/notices', (req, res) => {

});

/**
 * GET - single RenewalNotice of given Membership
 * @param - the id of the RenewalNotice
 */
router.get('/notice/:id', (req, res) => {

});

/**
 * CD - single RenewalNotice of given Membership
 */
router.route('/notice')
    .post((req, res) => {

    })
    .delete((req, res) => {

    });
