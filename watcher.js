'use strict';

var fs= require('fs'),
    util = require('util'),
    sys = require('sys'),
    exec = require('child_process').exec,
    configFileName = 'watcher.json';

util.log('------参数列表--------');
process.argv.forEach(function (val, index, array) {
    if ( index > 1) {
        util.log(index + ': ' + val);
    }
});

var configStr = fs.readFileSync(configFileName, 'utf-8'),
    watcherConfig;
if (configStr) {
    watcherConfig = JSON.parse(configStr);
}

util.log(watcherConfig);

var files = watcherConfig.files || [],
    processConfig = watcherConfig.process,
    onAfterFileChange = function (file) {
        var processType = typeof processConfig;
        if (processType === 'function') {
            process(file);
        } else if (processType === 'string') {
            exec(processConfig, function (error, stdout, stderr) {
                // console.log(typeof stdout);
                if (error) {
                    throw error;
                }
            });
        }
    };

files.forEach(function (file) {
    util.log('File ' + file + ' is under watch...');
    fs.watch(file, function (event) {
        console.log('File [' + file +'] ' + event);
        onAfterFileChange(file);
    });
});

