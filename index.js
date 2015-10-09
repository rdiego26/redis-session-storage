/**
 * Created by ramos on 08/10/15.
 */
'use strict';

//Modules dependencies
var app  = require('./route/routes'),
    http = require('http');

http.createServer(app).listen(app.get('port'), function() {
    console.log(app.get('title') + ' listening on port ' + app.get('port'));
});