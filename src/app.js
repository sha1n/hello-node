var express = require('express');
var expressSession = require('express-session');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./backend/routes/index');
var rest = require('./backend/routes/rest-api');

var passwordless = require('passwordless');
var MemoryStore = require('passwordless-memorystore');
var email   = require("emailjs");

var service = express();

var adminMail = '<sender>';
var host = 'http://localhost:3000/';

// smtp server for hotmail
var smtpServer  = email.server.connect({
    user:    adminMail,
    password: '<mail password>',
    host:    'smtp-mail.outlook.com',
    tls: { ciphers: "SSLv3" }
});

passwordless.init(new MemoryStore());
passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
        var host = 'localhost:3000';
        smtpServer.send({
            text:    'Hello!\nAccess your account here: http://' + host + '?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend),
            from:    adminMail,
            to:      recipient,
            subject: 'Token for ' + host
        }, function(err, message) {
            if(err) {
                console.log(err);
            }
            callback(err);
        });
});


//service.use(favicon(__dirname + '/public/favicon.ico'));
service.use(logger('dev'));
service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: false }));
service.use(cookieParser());
service.use(express.static(path.join(__dirname, 'public')));
service.use(expressSession({secret: '42', resave: true, saveUninitialized: true}));
service.use(passwordless.sessionSupport());
service.use(passwordless.acceptToken({ successRedirect: '/' }));

service.use('/', routes);
service.use('/api', rest);

// view engine setup
service.set('views', path.join(__dirname, 'backend/views'));
service.set('view engine', 'ejs');

// catch 404 and forward to error handler
service.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler - will print stacktrace
if (service.get('env') === 'development') {
    service.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler - no stacktraces leaked to user
service.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = service.listen(3000);


