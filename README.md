Spof
====

See what will happen to your site when a third-party provider goes down! 

It uses a [Blackhole server](http://en.wikipedia.org/wiki/Blackhole_server) by [Web page test](http://www.webpagetest.org/) to simulate what will happen if a third-party provider goes down. 

For more info read [this article](www.stevesouders.com/blog/2010/06/01/frontend-spof/) By [Steve Souders](http://www.stevesouders.com/)



_______
Installation
----------
First you need to install [Nodejs](http://nodejs.org) and [Phantomjs](http://phantomjs.org).  

Then in your command line run: 

    sudo npm install spof -g

_______

Usage
--------

    spof --website http://github.com --css --js --port 3001

- **--js**: SPOF javascripts
- **--css**: SPOF css
- **--port**: sepecify port for the server, default is 3000

**--js and --css are optional but you need to spof either js or css**

![usage](http://f.cl.ly/items/2R332X2a2l46030m3b0o/spof.mov.gif)


_______

Author
--------
[Khalid Lafi](http://github.com/lafikl)
[(@LafiKL)](http://twitter.com/lafikl) 



__________
 
Roadmap
----------
- Spof a certain file or a resource e.g ( example.com, example.com/app.js )


_______


Shout out
----------
- Thanks to [Steve Souders](http://www.stevesouders.com/) for his researches.
- Thanks to [Patrick Meenan](http://blog.patrickmeenan.com/) on his work at Web Page test and their blackhole server which i use in this tool!

License
---------
The MIT License (MIT)

Copyright (c) 2013 Khalid Lafi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.