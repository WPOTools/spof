var events = require('events').EventEmitter
var util = require('util')

util.inherits(Spof, events);

// Run engine then grab content 

function Spof (options) {
  // check if isn't called with `new` then construct it.
  if ( this.constructor !== Spof ) {
    return new Spof(options)
  }

  // supporting .on and .emit events
  events.call(this, options)

  this.website = options.website
  this.css = options.css ? " --css " : ""
  this.js = options.js ? " --js " : ""

}

Spof.prototype.run = function () {
  var path = require('path')
  var exec = require('child_process').exec
  var self = this

  var engine = path.resolve('lib/browser/index.js')

  exec( 'phantomjs ' + engine + " " + this.website + this.css + this.js ,
    function runBrowser( err, stdout ) {
      if ( err ) {
        self.emit('error', err)
      }
      else {
        self.emit('data', stdout)
      }
  })
}

module.exports = Spof