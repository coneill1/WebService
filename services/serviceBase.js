const dbConnInfo = require('../config.js').db_connection_info;
const mysql = require('mysql');
const Error = require('../models/error.js');

class ServiceBase {
    constructor() {
        this.connectionInfo = dbConnInfo;
        this.unitOfWorkFactory = mysql.createConnection;
    }

    sendQuery(sql) {
        return new Promise((resolve, reject) => {
            const uow = this.unitOfWorkFactory(this.connectionInfo);
            uow.connect();
            uow.query(sql, (error, results, fields) => {
                if (!!error) {
                    uow.end();
                    console.log(error);
                    reject(error);
                } else {
                    const data = results;
                    uow.end();
                    resolve(data);
                }
            })
        })

    }

    /*
    * Possible Errors:
    * 1062 - duplicate entry
    * unknown
    * */
    errorHandler(sqlCode, msg) {
        switch (sqlCode) {
            case 1062:
                return new Error({detail: 'Duplicate Value', statusCode: 400});
            case 1452:
            case 1406:
            case 1366:
                return new Error({detail: 'Invalid Data', statusCode: 400});
            case 1451:
                return new Error({detail: 'Invalid state change', statusCode: 400});
            case 1216:
                return new Error({detail: msg, statusCode: 400});
            default:
                return new Error({detail: 'Unknown', statusCode: 500});
        }
    };

    buildWhereClause(obj, type) {
        let filter = '';
        const keys = Object.keys(obj).filter(key => type.prototype.hasOwnProperty(key));
        if (keys.length > 0) {
            filter = 'WHERE ';
            keys.forEach(k => filter += `${k}='${obj[k]}' and `);
        }

        filter += ' true';

        return filter;
    }

    prepSql (sql) {
        return sql.replace(/\n\s*/g, '').replace(/undefined/g, 'null');
    };
}

module.exports = ServiceBase;
