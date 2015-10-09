/**
 * Created by ramos on 09/10/15.
 */
var request = require('supertest'),
    app = require('../route/routes'),
    constants = require('../util/constants'),
    connection = require('../util/connection').get();


describe('API Modules', function() {

    describe('Routes', function() {

        it('Nonexistent route returns 404', function(done) {
            request(app)
                .get('/')
                .expect(404, done);
        });

    });

    describe('Validate Method', function() {

        it('Send nonexistent token value returns 204', function(done) {

            var _headerToken = constants.app.headerKey,
                _json = {};

            _json[_headerToken] = "nonexistentValue";

            request(app)
                .post('/validate')
                .set('Accept', 'application/json')
                .send(_json)
                .expect(204, done);
        });

        it('Send existent token value return 200', function(done) {

            var _headerToken = constants.app.headerKey,
                _key = 'rdiego26',
                _value = 'someData',
                _json = {};

            _json[_headerToken] = _key;

            //First create token
            connection.set(_key, _value);

            request(app)
                .post('/validate')
                .send(_json)
                .expect(200, done);

        });

        it('Send invalid token key returns 403', function(done) {

            var _json = {'invalidKeyToken': 'value'};

            request(app)
                .post('/validate')
                .set('Accept', 'application/json')
                .send(_json)
                .expect(403, done);

        });

    });

});