const ServiceBase = require('../serviceBase.js');

class EthnicityService extends ServiceBase {
    constructor() {
        super();
    }

    async getEthnicities() {
        try {
            const rawData = await super.sendQuery('SELECT name FROM Ethnicity')
            return rawData.map(obj => obj.name);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async addEthnicity(name) {
        try {
            const rawData = await super.sendQuery(`call addEthnicity('${name}')`);
            return rawData[0];
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async updateEthnicity(oldName, newName) {
        try {
            return await super.sendQuery(`call updateEthnicity('${oldName}', '${newName}')`);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }

    async deleteEthnicity(name) {
        try {
            return await super.sendQuery(`call deleteEthnicity('${name}')`);
        } catch (e) {
            throw this.errorHandler(e.errno);
        }
    }
}

module.exports = new EthnicityService();
