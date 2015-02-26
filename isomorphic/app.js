/**
 * Created by shain on 2/26/15.
 */
var a = require('./module-a');

// Accessing the DOM and using other modules...
document.getElementById('content').innerText = "There ya go..." + a.sum([2, 2, 3, 3]);