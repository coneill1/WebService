const ServiceBase = require('./serviceBase.js');
const Member = require('../models/member.js');

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

    async addMember(member) {
        if (!member instanceof Member) {
            throw this.errorHandler(0);
        }
        try {
            const rawData = await super
                .sendQuery(`call addMember(${member.id}, '${member.firstName}', '${member.lastName}', ${member.age}, '${member.gender}', '${member.ethnicity}')`);
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
            const rawData = await super
                .sendQuery(`call updateMember(${member.membershipId}, '${member.firstName}', '${member.lastName}', ${member.age}, '${member.gender}', '${member.ethnicity}')`);
            return member;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async deleteMember(id) {
        try {
            // TODO: when updating an age range, the returned value still claims that 0 records were changed...Need to investigate this
            const data = await super.sendQuery(`call deleteMember(${id})`);
            return null;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }
}

module.exports = new MemberService();
