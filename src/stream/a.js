var fs = require('fs'),
path = require('path'),
out = process.stdout;

 
const fromPath = path.resolve('_bigData_.file')
const toPath = path.resolve('_bigData2_.file')

 
var stat = fs.statSync(fromPath);
var readStream = fs.createReadStream(fromPath);
var writeStream = fs.createWriteStream(toPath);
var totalSize = stat.size; // 文件的大小
var passedLength = 0; // 用来记录拷贝了多少
var lastSize = 0;
var startTime = Date.now(); // 记录拷贝前时间
readStream.on('data', function(chunk) {
    passedLength += chunk.length;
    if (writeStream.write(chunk) === false) {
        readStream.pause();
    }
});
writeStream.on('drain', function() {
    readStream.resume();
});
readStream.on('end', function() {
    writeStream.end();
});

setTimeout(function show() {
    var percent = Math.ceil((passedLength / totalSize) * 100); // 计算拷贝的百分比
    var size = Math.ceil(passedLength / 1024 / 1024); // 已完成的文件大小，字节转MB
    var diff = size - lastSize;
    lastSize = size;
    // out.clearLine(); // 清空控制台
    // out.cursorTo(0); // 设置标准输出的起始位置
    out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s\r\n');
    if (passedLength < totalSize) {
        setTimeout(show, 5);
    } else {
        var endTime = Date.now();
        console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
    }
}, 5);
 