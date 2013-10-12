var system = require('system')


var site    = system.args[1]
var spofCSS = system.args[2] == "--css"
var spofJS  = system.args[3] == "--js"



var page = require('webpage').create();
page.open( site, function(status) {

  if (status !== 'success') {
    console.log('error')
    return
  }

  var data = page.evaluate(function( css, js ) {


    // if --css flag passed
    if ( css ) {
      spofCSS()
    }

    // if --js flag passed
    if ( js ) {
      spofScripts()
    }

    var html = document.getElementsByTagName('html')[0].outerHTML

    return html



    function spofCSS() {
      var css = document.styleSheets
      var anchor = document.createElement('a')

      for (var i = 0; i < css.length; i++) {
        if( css[i].href ) {

          anchor.href = css[i].href
          if( anchor.origin !== location.origin ) {
            css[i].ownerNode.href = 'http://blackhole.webpagetest.org/'
          }
        }
      }
    }
    function spofScripts() {
      NodeList.prototype.forEach = Array.prototype.forEach

      var scripts = document.querySelectorAll('script[src]')
      var anchor = document.createElement('a')

      scripts.forEach(function ( el ) {
        anchor.href = el.src
        if ( anchor.origin !== location.origin ) {
          el.src = 'http://blackhole.webpagetest.org/'
        }
      })

    }
      

  }, spofCSS, spofJS )


  console.log( data )
  phantom.exit()
});