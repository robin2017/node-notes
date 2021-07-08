
const fs = require('fs')
const http = require('http')
// 创建大文件
const createBigFile = ()=>{
    const writeStream = fs.createWriteStream('./_bigData_.file')
    let  i = 1000000
    while(i-->0) writeStream.write('hello')
    writeStream.end()
}
// fs读取大文件
const server1 = http.createServer()
server1.on('request',(req,res)=>{
    fs.readFile('./_bigData_.file',(err,data)=>{
        res.end(data)
    })
}).listen(8888)
// stream读取大文件
const server2 = http.createServer()
server2.on('request',(req,res)=>{
    const stream = fs.createReadStream('./_bigData_.file');
    stream.pipe(res)
}).listen(8889)