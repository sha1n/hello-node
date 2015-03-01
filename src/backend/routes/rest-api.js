
var a = require('../../isomorphic/module-a');
var DataService = require('../data').DataService;
var express = require('express');
var passwordless = require('passwordless');
var router = express.Router();

var dataOptions = {
    beFast: true,
    beCool: true
};

router.get('/sum', passwordless.restricted(), function(req, res) {
    var x = parseFloat(req.query.x),
        y = parseFloat(req.query.y);

    var response = {
        sum: a.sum([x, y])
    };

    res.json(response);

});

router.post('/collections/:collectionName', function (req, res) {
    var object = req.body;
    var collectionName = req.param('collectionName');
    var data = new DataService(dataOptions);

    res.send(data.save(collectionName, object));
});

router.get('/collections/:collectionName', function (req, res) {
    var collectionName = req.param('collectionName');
    var data = new DataService(dataOptions);

    res.send(data.find(collectionName));
});


module.exports = router;
