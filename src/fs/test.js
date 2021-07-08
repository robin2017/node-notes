const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const { recurMkdirSync, copyDirSync } = require('./index.js');

// recurMkdirSync('./_test_/a2/b2/c2/d2');


// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//   console.log('err,data', err, data);
// });

// fs.writeFile('./write.txt', 'hello,write', (err, data) => {
//   console.log('err,data', err, data);
// });

// fs.writeFile('./write-append.txt', 'hello,write\r\n', { flag: 'a' }, (err, data) => {
//   console.log('err,data', err, data);
// });

// fsPromises.readFile('./data.txt', 'utf-8').then((rst) => {
//   console.log('fs promise:', rst);
// });

// fs.unlink('write.txt', (err) => console.log(err));

// fs.rename('./aaa2', './ddd/aaa2', (err) => { console.log(err); });
// fs.copyFileSync('./aaa2', 'bbb2');

// fs.rmdirSync('./ddd');

// fs.mkdirSync('./aa2/a/b/c');

console.log('aaaa', fs.readdirSync('./_test_/aa2'));

copyDirSync('./_test_', './_test2_');
