const path = require('path');

const a = path.dirname('./a/b/c');
console.log(a);

console.log(path.resolve('/a', 'b'));
console.log(path.resolve('a', 'b')); // 第一个参数为相对时，则前面会添加文件绝对路径
console.log(path.join('/a', 'b'));
console.log(path.join('a', 'b'));
// /a/b
// /Users/luobin/workspace/RobinWorkSpace/node-notes/src/path/a/b
// /a/b
// a/b
