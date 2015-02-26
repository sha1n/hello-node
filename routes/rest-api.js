
var a = require('../isomorphic/module-a');
var express = require('express');
var router = express.Router();


router.get("/sum", function(req, res) {
    var x = parseFloat(req.query.x),
        y = parseFloat(req.query.y);

    var response = {
        sum: a.sum([x, y])
    };

    res.json(response);
});


module.exports = router;