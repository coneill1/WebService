const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Member = require('../models/member.js');
const memberService = require('../services/memberService.js');
const ContactInfo = require('../models/contactInfo.js');
const {handleError} = require("../routerFunctions.js");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


const parseMemberData = (req, res, next) => {
    const member = new Member(req.body);
    if (!member.gender ||
        !member.firstName ||
        !member.lastName ||
        !member.ageRangeLow ||
        !member.ageRangeHigh) {
        res.error.detail = 'Invalid data';
        return res.error.send(400);
    }

    req.member = member;
    next();
};

/**
 * CU - single Member
 */
router.route('/')
    .put(parseMemberData, async (req, res) => {
        try {
            const result = await memberService.updateMember(req.member);
            res.status(200).send(result);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .post(parseMemberData, async (req, res) => {
        try {
            const result = await memberService.addMember(req.member);
            res.status(200).send(result);
        } catch (e) {
            handleError(req, res, e);
        }
    });

parseContactInfoData = (req, res, next) => {
    req.contactInfo = new ContactInfo(req.body);
    next();
};

/**
 * CRUD - single ContactInformation of a Member
 * @param id - id of the Member
 */
router.route('/:id/contact')
    .get(async (req, res) => {
        const id = req.params['id'];
        console.log(id);
        try {
            const result = await memberService.getMemberContactInfo(id);
            res.status(200).send(result);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .put(parseContactInfoData, async (req, res) => {
        req.contactInfo.memberId = req.params['id'];
        try {
            const result = await memberService.updateMemberContactInfo(req.contactInfo);
            res.status(200).send(result);
        } catch (e) {
            handleError(req, res, e);
        }
    })
    .post(parseContactInfoData, async (req, res) => {
        req.contactInfo.memberId = req.params['id'];
        try {
            const result = await memberService.addMemberContactInfo(req.contactInfo);
            res.status(200).send(result);
        } catch (e) {
            handleError(req, res, e);
        }
    });


module.exports = router;

