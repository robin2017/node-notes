
const fs = require('fs')
const http = require('http')
const process  = require('process')
 

 



// 1-1、(文件复制源文件).pipe(服务端网络响应response)  
const server2 = http.createServer()
server2.on('request',(req,res)=>{
    fs.createReadStream('./_data_.file').pipe(res)
}).listen(8889)

// 1-2:(服务端网络响应response).end(数据)
const server3 = http.createServer()
server3.on('request',(req,res)=>{
    res.end(fs.readFileSync('./_data_.file'))
}).listen(8888)

// 2-1、(文件复制源文件).pipe(文件复制目标文件) 
fs.createReadStream('_data_.file').pipe(fs.createWriteStream('_copy_.file'))
// 2-1、(文件复制目标文件).end(数据) 
fs.createWriteStream('_copy2_.file').end(fs.readFileSync('_data_.file'))
// 2-3、可以看进度
// xxx