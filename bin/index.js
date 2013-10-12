#!/usr/bin/env node

var cli = require('commander')
var colors = require('colors')

cli
  .version('0.0.1')
  .option('-w, --website <val>', 'Url to website to SPOFed')
  .option('-p, --port [val]', 'set a port, defaults to 3000')
  .option('-c, --css', 'SPOF CSS')
  .option('-j, --js', 'SPOF JS')
  .parse(process.argv);

if ( !cli.website ) {
  throw new Error('you need to pass a website')
  return
}

if ( !cli.css & !cli.js ) {
  throw new Error('you need to at least SPOF CSS or JS')
}

var css  = !!cli.css
var js   = !!cli.js
var port = cli.port || 3000



var Spof = require('../lib/main')
var sp = Spof( { website: cli.website, css: css, js: js })

// run engine
sp.run()

console.log('  Engine is running'.magenta)
// data == spofed html string
sp.on('data', function (data) {

  var http = require('http')
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(data, 'utf8')
    res.end()
  }).listen(port, '127.0.0.1')
  console.log(('  Spofed version of '+ cli.website +' running on http://127.0.0.1:'+ port).green)

})

sp.on('error', function (err) {
  console.log(err)
})