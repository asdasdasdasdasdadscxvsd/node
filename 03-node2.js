var a = 10;
module.exports.a = a;
var fn = require('./03-node1.js');
console.log(fn.sum(3,4));