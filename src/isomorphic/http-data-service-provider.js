/**
 * Created by shain on 3/1/15.
 */
var request = require('request');

exports.DataServiceHttpProvider = function DataServiceHttpProvider(options) {
    this.options = options || {
        host: 'localhost:3000',
        baseUrl: '/api/collections'
    };
    this.collectionUrl = 'http://' + options.host + options.baseUrl;
};

exports.DataServiceHttpProvider.prototype.save = function(collection, object) {
    console.log('saving:', object, ' to: ', collection);
    console.log('this:', this, ' options:', this.options);

    object.createdOn = new Date().toJSON();
    object.updatedOn = new Date().toJSON();

    return request({
        uri: this.collectionUrl + '/' + collection,
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(object)
    }, onResponse);
};

exports.DataServiceHttpProvider.prototype.find = function(collection) {
    console.log('finding (nothing) is:', collection);

    return request({
        uri: this.collectionUrl + '/' + collection,
        method: 'GET',
        headers: headers()
    }, onResponse);
};

function onResponse(error, res, body) {
    if (error) {
        console.log('ERROR:', error);
    } else {
        console.log('Success:', body);
    }
}

function headers() {
    return {
        'accept': 'application/json',
        'content-type': 'application/json'
    };
}