var zip = require('zipcode');

// returns data in [city, state] format
var info = zip.lookup('16050');

console.log("City: "+info[0]);
console.log("State: "+info[1]);
