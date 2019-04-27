class Error {
    constructor(args) {
        this.detail = args['detail'] || '';
        this.statusCode = args['statusCode'] || 500;
    }
}

module.exports = Error;
