const fs = require('fs');
const path = require('path');
// https://www.cnblogs.com/fsh1542115262/p/4645868.html

const out = process.stdout;
const fromPath = path.resolve('_bigData_.file');
const toPath = path.resolve('_bigData2_.file');
const totalSize = fs.statSync(fromPath).size; // 文件的大小
let passedLength = 0; // 用来记录拷贝了多少
let lastSize = 0;
const startTime = Date.now(); // 记录拷贝前时间


const readStream = fs.createReadStream(fromPath);
const writeStream = fs.createWriteStream(toPath);

// 正常chunk大小为64k
readStream.on('data', (chunk) => { // 当有数据流出时，写入数据
  passedLength += chunk.length;
  writeStream.write(chunk);
  // 写入时暂停读取流
  readStream.pause();
});
writeStream.on('drain', () => { // 写完后，继续读取
  readStream.resume();
});
readStream.on('end', () => { // 当没有数据时，关闭数据流
  writeStream.end();
});

const duration = 1;
function show() {
  const percent = Math.ceil((passedLength / totalSize) * 100); // 计算拷贝的百分比
  const size = Math.ceil(passedLength / 1024); // 已完成的文件大小，字节转kb
  const diff = size - lastSize;
  lastSize = size;
  out.write(`已完成${ size }kB, ${ percent }%, 差值：${ diff }kb\r\n`);
  if (passedLength < totalSize) {
    setTimeout(show, duration);
  } else {
    const endTime = Date.now();
    console.log(`共用时：${ (endTime - startTime) / 1000 }秒。`);
  }
}
setTimeout(show, duration);

