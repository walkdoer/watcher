'use strict';

var fs = require('fs');
var D = require('util').debug;


require('../watcher');
var line = 1;
function write() {
    D("Writing");
    fs.writeFile("testFile", "#" + line++, function (err) {
        D("Wrote file");
    });
}

setTimeout(write, 1000);
setTimeout(write, 2000);
