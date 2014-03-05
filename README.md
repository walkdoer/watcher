Watcher
================

用于监听文件改变并执行命令

###运行方式

1. 配置文件: `watcher.json`
2. 运行命令: `node watcher`

###例子
```
{
    files: ['path/to/the/file/you/want/to/watch'],
    //文件发生改变需要执行的命令
    command: 'scp file name@host:path/to/a/folder'
}

```

Release History
----------------------

