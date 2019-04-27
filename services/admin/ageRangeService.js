const ServiceBase = require('../serviceBase.js');

class AgeRangeService extends ServiceBase {
    constructor() {
        super();
    }

    async getAgeRanges() {
        try {
            return await super.sendQuery('SELECT id, low, high FROM AgeRange');
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async addAgeRange(ageRange) {
        try {
            const rawData = await super.sendQuery(`call addAgeRange(${ageRange.low}, ${ageRange.high})`);
            return ageRange;
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async updateAgeRange(ageRange) {
        try {
            // TODO: when updating an age range, the returned value still claims that 0 records were changed...Need to investigate this
            const data = await super.sendQuery(`call updateAgeRange(${ageRange.id}, ${ageRange.low}, ${ageRange.high})`);
            return data.changedRows > 0 ? ageRange : null;
        }
         catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async deleteAgeRange(id) {
        try {
            // TODO: when updating an age range, the returned value still claims that 0 records were changed...Need to investigate this
            const data = await super.sendQuery(`call deleteAgeRange(${id})`);
            return null;
        }
        catch (e) {
            throw this.errorHandler(e.errno);
        }
    }
}

module.exports = new AgeRangeService();
