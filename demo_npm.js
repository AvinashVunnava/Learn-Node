var uc = require('upper-case')
var http = require('http')

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(uc.upperCase('Hello-World'))
  res.end()
}).listen(8080);
