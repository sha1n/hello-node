var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var rest = require('./routes/rest-api');

var service = express();

// uncomment after placing your favicon in /public
//service.use(favicon(__dirname + '/public/favicon.ico'));
service.use(logger('dev'));
service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: false }));
service.use(cookieParser());
service.use(express.static(path.join(__dirname, 'public')));

service.use('/', routes);
service.use('/api', rest);

// view engine setup
service.set('views', path.join(__dirname, 'views'));
service.set('view engine', 'jade');

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


