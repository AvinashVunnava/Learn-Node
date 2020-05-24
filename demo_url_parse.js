var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log('url', adr)
console.log('host', q.host);
console.log('pathname', q.pathname);
console.log('search', q.search);

var qdata = q.query;
console.log('month', qdata.month);
