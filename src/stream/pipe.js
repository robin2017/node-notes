
const fs = require('fs');
const http = require('http');
const process = require('process');


// 1、(服务端网络请求request).pipe(服务端网络响应response) [正确，必须为post]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     console.log('req:',req)
//     req.pipe(res)
// }).listen(8889)

// 2、(文件复制源文件).pipe(文件复制目标文件) [正确]
// fs.createReadStream('_data_.file').pipe(fs.createWriteStream('_copy_.file'))

// 3、(process.stdin).pipe(process.stdout) [正确！！！]
// process.stdin.pipe(process.stdout);

// 4、(服务端网络请求request).pipe(文件复制目标文件) [正确，post请求]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     req.pipe(fs.createWriteStream('./_req_.file'))
//     res.end('收到数据')
// }).listen(8889)

// 5、(服务端网络请求request).pipe(process.stdout)) [正确，post请求]
// const server2 = http.createServer();
// server2.on('request', (req, res) => {
//   req.pipe(process.stdout);
//   res.end('收到数据');
// }).listen(8889);

// 6、(文件复制源文件).pipe(服务端网络响应response) [正确]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     fs.createReadStream('./_data_.file').pipe(res)
// }).listen(8889)

// 7、(文件复制源文件).pipe(process.stdout) [正确！！！]
// fs.createReadStream('_data_.file').pipe(process.stdout);

// 8、(process.stdin).pipe(服务端网络响应response) [无法暂停输入！！]
// const server2 = http.createServer();
// server2.on('request', (req, res) => {
//   process.stdin.pipe(res);
// }).listen(8889);

// 9、(process.stdin).pipe(文件复制目标文件) [正确]
// process.stdin.pipe(fs.createWriteStream('./_stdout_.file'));

