/**
 * Created by shain on 2/26/15.
 */
var a = require('./module-a');
var DataServiceHttpProvider = require('./http-data-service-provider').DataServiceHttpProvider;
var DataClient = require('./data-client').DataClient;

// Accessing the DOM and using other modules...
document.getElementById('content').innerText = "There ya go..." + a.sum([2, 2, 3, 3]);

var dataProvider = new DataServiceHttpProvider({
    host: 'localhost:3000',
    baseUrl: '/api/collections'
});
var dataClient = new DataClient(dataProvider);
console.log(dataClient.save('myCollection', {}));
console.log(dataClient.find('myCollection'));

