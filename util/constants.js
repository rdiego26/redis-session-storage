/**
 * Created by ramos on 08/10/15.
 */
var constants = {

    app: {
        name: 'Redis Session Storage',
        headerKey: 'token',
        sessionExpireSeconds: 30
    },

    header: {
        json: 'application/json;charset=UTF-8;'
    },

    db: {
        host: 'localhost',
        port: 6379
    },

    server: {
        port: 4000
    }
};

module.exports = Object.freeze(constants);