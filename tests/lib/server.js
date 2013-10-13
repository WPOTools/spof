var data = 
'<html><head><script src="http://example.com/app.js"></script><link type="text/css" rel="stylesheet" href="http://example.com/app.css"></head></html>'

var http = require('http')


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'})
  res.write(data, 'utf8')
  res.end()
}).listen(3005, '127.0.0.1')
console.log('Server running!')