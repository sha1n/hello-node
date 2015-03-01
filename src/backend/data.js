/**
 * Created by shain on 3/1/15.
 */

var request = require('request');

exports.DataService = function Data(options) {
    this.options = options;
};

exports.DataService.prototype.save = function(collection, object) {
    console.log('saving:', object, ' to: ', collection);
    console.log('this:', this, ' options:', this.options);

    object.createdOn = new Date().toJSON();
    object.updatedOn = new Date().toJSON();

    return object;
};

exports.DataService.prototype.find = function(collection) {
    console.log('finding (nothing) is:', collection);

    return {
        total: 0,
        items: []
    };
};