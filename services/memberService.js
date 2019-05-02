const ServiceBase = require('./serviceBase.js');
const Member = require('../models/member.js');
const ContactInfo = require('../models/contactInfo.js');

class MemberService extends ServiceBase {
    constructor() {
        super();
    }

    async getMembers(filter) {
        try {
            let sql = 'select * from MemberView';
            if (!!filter) {
                const whereClause = this.buildWhereClause(filter, Member);
                sql += ` ${whereClause}`;
            }
            return await super.sendQuery(sql);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async getMemberContactInfo(memberId) {
        try {
            let sql = `select * from MemberContactView where memberId = ${memberId}`;
            return await super.sendQuery(sql);
        } catch (e) {
            throw this.errorHandler(e.errno, e.message);
        }
    }

    async addMember(member) {
        if (!member instanceof Member) {
            throw this.errorHandler(0);
        }
        try {
            let sql = `call addMember(${member.membershipId}, 
            '${member.firstName}', 
            '${member.lastName}', 
            ${member.ageRangeLow}, 
            ${member.ageRangeHigh}, 
            '${member.gender}', 
            '${member.ethnicity}')`;
            const rawData = await super.sendQuery(sql.replace(/\n\s*/g, ''));
            return member;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async updateMember(member) {
        if (!member instanceof Member) {
            throw this.errorHandler(0);
        }
        try {
            let sql = `call updateMember(${member.id}, 
                '${member.firstName}', 
                '${member.lastName}', 
                ${member.ageRangeLow},
                ${member.ageRangeHigh}, 
                '${member.ethnicity}', 
                '${member.gender}')`;
            const rawData = await super.sendQuery(this.prepSql(sql));
            return member;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async updateMemberContactInfo(contactInfo) {
        if (!contactInfo instanceof ContactInfo) {
            throw this.errorHandler(0);
        }
        try {
            let sql = `call updateContactInformation(${contactInfo.memberId}, 
            '${contactInfo.phone}', 
            '${contactInfo.email}', 
            '${contactInfo.company}', 
            '${contactInfo.street}', 
            '${contactInfo.city}', 
            '${contactInfo.zip}', 
            '${contactInfo.state}')`;
            const rawData = await super.sendQuery(this.prepSql(sql));
            return contactInfo;
        } catch (e) {
            throw this.errorHandler(e.errno, e.message);
        }
    }

    async addMemberContactInfo(contactInfo) {
        if (!contactInfo instanceof ContactInfo) {
            throw this.errorHandler(0);
        }
        try {
            let sql = `call addMemberContact(${contactInfo.memberId}, 
            '${contactInfo.phone}', 
            '${contactInfo.email}', 
            '${contactInfo.company}', 
            '${contactInfo.street}', 
            '${contactInfo.city}', 
            '${contactInfo.zip}', 
            '${contactInfo.state}')`;
            const rawData = await super.sendQuery(this.prepSql(sql));
            return contactInfo;
        } catch (e) {
            throw this.errorHandler(e.errno, e.message);
        }
    }

    async deleteMember(id) {
        try {
            const data = await super.sendQuery(`call deleteMember(${id})`);
            return null;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }
}

module.exports = new MemberService();
