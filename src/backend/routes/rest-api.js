
var a = require('../../isomorphic/module-a');
var DataServiceProvider = require('../backend-data-service-provider').BackendDataServiceProvider;
var DataClient = require('../../isomorphic/data-client').DataClient;
var express = require('express');
var passwordless = require('passwordless');
var router = express.Router();

var dataClient = new DataClient(new DataServiceProvider());
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

router.put('/collections/:collectionName', function (req, res) {
    var object = req.body;
    var collectionName = req.params.collectionName;

    console.log('put [', object, '] in [', collectionName, ']');

    res.send(dataClient.save(collectionName, object));
});

router.get('/collections/:collectionName', function (req, res) {
    var collectionName = req.params.collectionName;
    //var data = new DataService(dataOptions);

    console.log('get from [', collectionName, ']');

    res.send(dataClient.find(collectionName));
});


module.exports = router;
