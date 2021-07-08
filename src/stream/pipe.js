
const fs = require('fs')
const http = require('http')
const process  = require('process')
 

// 1、(服务端网络请求request).pipe(服务端网络响应response) [待验证]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     req.pipe(res)
// }).listen(8889)

// 2、(文件复制源文件).pipe(文件复制目标文件) [正确]
// fs.createReadStream('_data_.file').pipe(fs.createWriteStream('_copy_.file'))

// 3、(process.stdout).pipe(process.stdin) [正确！！！]
// process.stdout.pipe(process.stdin)

// 4、(文件复制源文件).pipe(服务端网络响应response) [正确]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     fs.createReadStream('./_data_.file').pipe(res)
// }).listen(8889)

// 5、(文件复制源文件).pipe(process.stdin) [正确！！！]
//  fs.createReadStream('_data_.file').pipe(process.stdin)

// 6、(process.stdout).pipe(文件复制目标文件) [正确]
// process.stdout.pipe(fs.createWriteStream('./_stdout_.file'))

// 7、(process.stdout).pipe(服务端网络响应response) [无法中断]
// const server2 = http.createServer()
// server2.on('request',(req,res)=>{
//     process.stdout.pipe(res)
// }).listen(8889)
