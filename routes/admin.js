const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const specialAccommodationService = require('../services/admin/specialAccommodationService.js');
const ethnicityService = require('../services/admin/ethnicityService.js');
const ageRangeService = require('../services/admin/ageRangeService.js');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/**
 * GET - collection of SpecialAccommodations
 */
router.get('/specialAccommodations', async (req, res) => {
    try {
        const data = await specialAccommodationService.getAccommodations();
        res.status(200).json(data);
    } catch (e) {
        handleError(req, res, e);
    }
});

const handleError = (req, res, error) => {
    res.error.detail = error.detail;
    return res.error.send(error.statusCode);
};

/**
 * GET - single SpecialAccommodation
 * @param type - type of SpecialAccommodation
 */
router.get('/specialAccommodation/:type', (res, req) => {
    res.status(200).send('Special Accommodation');
});

/**
 * CUD - single SpecialAccommodation
 * @body - {type: "string"}
 */
router.route('/specialAccommodation')
    .put(async (req, res) => {
        if (!req.body || !req.body.oldType || !req.body.newType) {
            return res.status(400).send(req.body);
        }

        try {
            const data = await specialAccommodationService.updateAccommodation(req.body.oldType, req.body.newType);
            if (data.affectedRows === 0) {
                return res.status(400).json(req.body);
            }
            res.sendStatus(200);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .post(async (req, res) => {
        if (!req.body || !req.body.type) {
            return res.status(400).send(req.body);
        }

        try {
            const type = req.body.type;
            const data = await specialAccommodationService.addAccommodation(type);
            res.status(200).json(data);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .delete(async (req, res) => {
        if (!req.body || !req.body.type) {
            return res.sendStatus(400);
        }

        try {
            const data = await specialAccommodationService.deleteAccommodation(req.body.type);
            if (data.affectedRows === 0) {
                return res.status(400).json(req.body);
            }
            res.sendStatus(200);
        } catch (e) {
            handleError(req, res, e);
        }
    });

/**
 * GET - collection of Ethnicities
 */
router.get('/ethnicities', async (req, res) => {
    try {
        const data = await ethnicityService.getEthnicities();
        res.status(200).json(data);
    } catch (e) {
        handleError(req, res, e);
    }
});

/**
 * GET - single Ethnicity
 * @param name - name of Ethnicity
 */
router.get('/ethnicity/:name', (res, req) => {
    res.status(200).send('Ethnicity');
});

/**
 * CUD - single Ethnicity
 */
router.route('/ethnicity')
    .put(async (req, res) => {
        if (!req.body || !req.body.oldName || !req.body.newName) {
            return res.status(400).send(req.body);
        }

        try {
            const data = await ethnicityService.updateEthnicity(req.body.oldName, req.body.newName);
            if (data.affectedRows === 0) {
                return res.status(400).json(req.body);
            }
            res.sendStatus(200);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .post(async (req, res) => {
        if (!req.body || !req.body.name) {
            return res.status(400).send(req.body);
        }

        try {
            const data = await ethnicityService.addEthnicity(req.body.name);
            res.status(200).json(data);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .delete(async (req, res) => {
        if (!req.body || !req.body.name) {
            return res.sendStatus(400);
        }

        try {
            const data = await ethnicityService.deleteEthnicity(req.body.name);
            console.log(data);
            if (data.affectedRows === 0) {
                return res.status(400).json(req.body);
            }
            res.sendStatus(200);
        } catch (e) {
            handleError(req, res, e);
        }
    });

/**
 * GET - collection of AgeRanges
 */
router.get('/ageRanges', async (req, res) => {
    try {
        const ranges = await ageRangeService.getAgeRanges();
        res.status(200).json(ranges);
    } catch (e) {
        handleError(req, res, e);
    }
});

const getAgeRange = (req, res, next) => {
    if (!req.body) {
        res.error.detail = 'Invalid data';
        return res.error.send(400);
    }

    const range = {
        id: req.body.id,
        high: req.body.high,
        low: req.body.low
    };

    if (range.high < range.low || range.high < 0 || range.low < 0) {
        res.error.detail = 'Invalid data';
        return res.error.send(400);
    }

    req.ageRange = range;

    next();
};

const validateAgeRange = (req, res, next) => {
    const range = req.ageRange;
    if (!range || !range.high || !range.low || range.high < range.low || range.high < 0 || range.low < 0) {
        res.error.detail = 'Invalid data';
        return res.error.send(400);
    }
};

/**
 * CRUD - single AgeRange
 * @param id - id of the AgeRange
 */
router.route('/ageRange')
    .all(getAgeRange)
    .put(validateAgeRange, async (req, res) => {
        try {
            const data = await ageRangeService.updateAgeRange(req.ageRange);
            res.status(200).json(data);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .post(validateAgeRange, async (req, res) => {
        try {
            const data = await ageRangeService.addAgeRange(req.ageRange);
            res.status(200).json(data);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .delete(async (req, res) => {
        if (!req.ageRange || !req.ageRange.id) {
            res.error.detail = 'Invalid data';
            return res.error.send(400);
        }

        try {
            const data = await ageRangeService.deleteAgeRange(req.body.id);
            res.status(200).send(data);
        } catch (e) {
            handleError(req, res, e);
        }
    });

/**
 * GET - collection of MembershipType
 */
router.get('/membershipTypes', (req, res) => {

});

/**
 * GET - single MembershipType
 * @param name - name of the MembershipType
 */
router.get('/membershipType/:name', (res, req) => {

});

/**
 * CUD - single MembershipType
 */
router.route('/membershipType')
    .put((req, res) => {

    })
    .post((req, res) => {

    })
    .delete((req, res) => {

    });

/**
 * GET - collection of Reasons
 */
router.get('/reasons', (req, res) => {

});

/**
 * GET - single Reason
 * @param name - the name of the Reason
 */
router.get('/reason/:name', (res, req) => {

});

/**
 * CRUD - single Reason
 */
router.route('/reason')
    .put((req, res) => {

    })
    .post((req, res) => {

    })
    .delete((req, res) => {

    });

/**
 * GET - collection of VenueTypes
 */
router.get('/venueTypes', (req, res) => {

});

/**
 * GET - single VenueType
 * @param name - the name of the VenueType
 */
router.route('/venueType/:name', (res, req) => {

});

/**
 * CU - single VenueType
 */
router.route('/venueType')
    .put((req, res) => {

    })
    .post((req, res) => {

    });

// TODO: fix catch all route
router.route('/*')
    .all((req, res) => {
        res.error.detail = 'Route not found';
        res.error.send(400);
    });

module.exports = router;
