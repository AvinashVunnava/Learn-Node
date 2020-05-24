var http = require('http')
var myModule = require('./myFirstModule')

http.createServer(function(req, res){
  res.writeHead(200, { 'Content--Type': 'application/json' });
  res.write('My First Date Time Module : ' + myModule.myDateTime());
  res.end();
}).listen(8080);
