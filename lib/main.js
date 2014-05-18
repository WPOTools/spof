var events = require('events').EventEmitter
var util = require('util')

util.inherits(Spof, events);

// Run engine then grab content 

function Spof (options) {
  // check if isn't called with `new` then construct it.
  if ( !(this instanceof Spof) ) {
    return new Spof(options)
  }

  // supporting .on and .emit events
  events.call(this, options)

  var url = require('url')
  this.hostname = url.parse(options.website).hostname
  this.website = options.website
  this.css = options.css
  this.js = options.js
  this.blackhole = 'http://blackhole.webpagetest.org/'

}

Spof.prototype.run = function () {
  var self = this
  var url = require('url')
  var cheerio = require('cheerio')
  var request = require('request')
  var parallel = require('async').parallel



  request(this.website, function(err, res, body) {
    if ( err ) return self.emit('error', err)

    if ( res.statusCode !== 200 ) return self.emit('error', new Error('Response wasn\'t successful 200'))

    var $ = cheerio.load(body);

    parallel([
      function(cb) {
        if ( self.js ) {
          var $scripts = $('script[src]')

          $scripts.each(function() {
            var src = $(this).attr('src')
            var parsedSrc = url.parse(src)
            if ( parsedSrc.hostname !== self.hostname ) $(this).attr('src', self.blackhole)
          })
          cb()
        } else {
          cb()
        }
      },
      function(cb) {
        if ( self.css ) {
          var $css = $('link[rel=stylesheet]')

          $css.each(function() {
            var src = $(this).attr('href')
            var parsedSrc = url.parse(src)
            if ( parsedSrc.hostname !== self.hostname ) $(this).attr('href', self.blackhole)
          })

          cb()
        } else {
          cb()
        }
      }
    ], function(err, results) {
      if ( err ) return self.emit(err)

      self.emit('data', $.html())
    })
    

  })
}

module.exports = Spof