const readline = require('readline');
const fs = require('fs');
// 场景一：命令行操作
const cmdExample = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('你的名字是什么?', (answer) => {
    console.log('你好:', answer);
    rl.close();
  });
};
// 场景二、文件处理
const fileExample = () => {
  const fWrite = fs.createWriteStream('./_to_.file');
  const rl = readline.createInterface({
    input: fs.createReadStream('./_from_.file'),
    // 此处不用output
  });
  rl.on('line', (line) => {
    fWrite.write(`-${line }-\r\n`);
  });
  rl.on('close', () => {
    fWrite.end();
  });
};


// cmdExample();
fileExample();
