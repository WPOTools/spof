// CLI: spof -w http://google.com
// Code: var spof = require('spof');
// spof.run({ website: 'http://google.com' })
//
var test = require('tap').test
  , exec = require('child_process').exec


test('')