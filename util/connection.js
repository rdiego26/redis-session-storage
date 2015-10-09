/**
 * Created by ramos on 08/10/15.
 */
var constants = require('./constants'),
    redis = require('redis'),
    connection;

connection = {
    get: function() {
        return redis.createClient(constants.db.port, constants.db.host);
    }
};

module.exports = connection;
