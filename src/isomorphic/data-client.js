/**
 * Created by shain on 3/1/15.
 */

exports.DataClient = function DataClient(provider) {
    this.provider = provider;
};

exports.DataClient.prototype.save = function(collection, object) {
    console.log('DataClient "save"');

    return this.provider.save(collection, object);
};

exports.DataClient.prototype.find = function(collection) {
    console.log('Dataclient "find"');

    return this.provider.find(collection);
};