Spof
====

See what will happen when third-party resource goes down!
for more info read [this article](www.stevesouders.com/blog/2010/06/01/frontend-spof/)


    sudo npm install spof -g


Usage
----------
First you need to install [Phantomjs](phantomjs.org). 

Then in your command line run: 

    spof --website http://github.com --css --js --port 3001

- **--js**: SPOF javascripts
- **--css**: SPOF css
- **--port**: sepecify port for the server, default is 3000

**--js and --css are optional but you need to spof either js or css**

![usage](http://d1zjcuqflbd5k.cloudfront.net/files/acc_126602/NFwy?response-content-disposition=inline;%20filename=spof.mov.gif;%20filename*=UTF-8%27%27spof.mov.gif&Expires=1381624184&Signature=UPaK6NWwVybcd5OM7MDNhVvo7ZQ5fMYETTgwI7ubSMx45IYz4R0RZ-Aps5fxD5OthfUMAXvuJQ4WI-e-v0Fk1xgt8IlboC8lH-DTyeXhUrVR8KPMs2wSA1mtXd6jQOq7Y-4d0CjX5TLhN-hlf8TbsvjJ9rQPg7Sh0UsrIG3I8LM_&Key-Pair-Id=APKAJTEIOJM3LSMN33SA)


Author
--------
[Khalid Lafi](http://github.com/lafikl)
[@lafikl](http://twitter.com/lafikl)


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