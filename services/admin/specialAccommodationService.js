const ServiceBase = require('../serviceBase.js');

class SpecialAccommodationService extends ServiceBase {
    constructor() {
        super();
    }

    async getAccommodations() {
        try {
            const rawData = await super.sendQuery('SELECT type FROM SpecialAccommodation')
            return rawData.map(obj => obj.type);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async addAccommodation(type) {
        try {
            const rawData = await super.sendQuery(`call addSpecialAccommodation('${type}')`);
            return rawData[0];
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async updateAccommodation(oldType, newType) {
        try {
            return await super.sendQuery(`call updateSpecialAccommodation('${oldType}', '${newType}')`);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async deleteAccommodation(type) {
        try {
            return await super.sendQuery(`call deleteSpecialAccommodation('${type}')`);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }
}

module.exports = new SpecialAccommodationService();
