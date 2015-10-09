/**
 * Created by ramos on 09/10/15.
 */
var connection = require('../util/connection').get(),
    constants = require('../util/constants'),
    sessionController;

sessionController = {

    validate: function(req, res) {

        var _token = req.body[constants.app.headerKey];

        if(!_token)
            res.status(403).end();

        connection.exists(_token, function(err, reply) {

            if(err)
                res.status(500).end(err);

            if(reply === 1) {
                connection.expire(_token, constants.app.sessionExpireSeconds);
                res.status(200).end();
            } else {
                res.status(204).end();
            }

        });

    }

};

module.exports = sessionController;