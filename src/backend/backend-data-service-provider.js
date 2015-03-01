/**
 * Created by shain on 3/1/15.
 */

exports.BackendDataServiceProvider = function BackendDataServiceProvider() {};

exports.BackendDataServiceProvider.prototype.save = function(collection, object) {
    console.log('BackendDataService save');

    return object;
};

exports.BackendDataServiceProvider.prototype.find = function(collection) {
    console.log('BackendDataService find');

    return {
        total: 0,
        items: []
    };
};
