// CLI: spof -w http://google.com
// Code: var spof = require('spof');
// spof.run({ website: 'http://google.com' })
//
var test = require('tap').test
var Spof = require('../lib/main')


test('SPOF should work without new keyword', function (t) {

  var sp = Spof( { website: 'http://google.com', css: true, js: true })

  t.ok(!!sp.run, "it has run method indeed!")
  t.end()
})


test('spof css only', function (t) {
  t.plan(2)

  var sp = Spof( { website: 'http://127.0.0.1:3005', css: true, js: false })

  sp.run()

  sp.on('data', function (data) {
    var findJs = data.match(/http:\/\/example\.com\/app\.js/)
    var findBlackhole = data.match(/http:\/\/blackhole\.webpagetest\.org/)
    t.ok(findJs, 'js exist')
    t.ok(findBlackhole, 'css is spofed')
  })
})


test('spof js only', function (t) {
  t.plan(2)

  var sp = Spof( { website: 'http://127.0.0.1:3005', css: false, js: true })

  sp.run()

  sp.on('data', function (data) {
    console.log(data)
    var findCss = data.match(/http:\/\/example\.com\/app\.css/)
    var findBlackhole = data.match(/http:\/\/blackhole\.webpagetest\.org/)
    t.ok(findCss, 'css exist')
    t.ok(findBlackhole, 'js is spofed')
  })
})