/**
 * Created by ramos on 08/10/15.
 */
var express  = require('express'),
    bodyParser = require('body-parser'),
    constants = require('../util/constants'),
    sessionController = require('../controller/session');

/* App Configuration */
var app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);
app.use(bodyParser.json());

/* Include CORS and JSON Type on ALL res's  */
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-type', constants.header.json);
    res.removeHeader("X-Powered-By"); //Remove header for safety reasons
    next();
});


app.post('/validate', function(req, res) {
    sessionController.validate(req, res);
});

//DEFAULT ROUTE
app.get( '*' , function(req, res) {
    res.status(404).end();
});

module.exports = app;