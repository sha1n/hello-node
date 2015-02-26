
var calc = require('./module-b');
var _ = require('underscore');

module.exports.sum = sum;


function sum(values) {
    return _.reduce(values, function(memo, value) {
        return calc.add(memo, value);
    }, 0);
}