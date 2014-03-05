'use strict';

var fs= require('fs'),
    configFileName = 'watcher.json';

console.log('------参数列表--------');
process.argv.forEach(function (val, index, array) {
    if ( index > 1) {
        console.log(index + ': ' + val);
    }
});

var configStr = fs.readFileSync(configFileName, 'utf-8'),
    watcherConfig;
if (configStr) {
    watcherConfig = JSON.parse(configStr);
}

console.log(watcherConfig);

var files = watcherConfig.files || [];

files.forEach(function (file) {
    console.log('File ' + file + ' is under watch...');
    fs.watch(file, function (event, fileName) {
        console.log(arguments);
        console.log(event);
    });
});

process.on('exit', function(code) {
    console.log('About to exit of watcher');
});
