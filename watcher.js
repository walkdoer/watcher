'use strict';

var fs= require('fs'),
    configFileName = 'watcher.json';

console.log('------参数列表--------');
process.argv.forEach(function (val, index, array) {
    if ( index > 1) {
        console.log(index + ': ' + val);
    }
});

var config = fs.readFile(configFileName);

