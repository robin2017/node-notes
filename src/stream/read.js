const fs = require('fs');
const path = require('path');

// 监听data时才触发数据传输
const readStream = fs.createReadStream('_req_.file');
setTimeout(() => {
  readStream.on('data', (chunk) => {
    console.log('chunk:', chunk);
  });
}, 10000);
