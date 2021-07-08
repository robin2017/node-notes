---
title: 3、流stream模块
order: 13
---
#### 参考资料
[官网](https://nodejs.org/dist/latest-v14.x/docs/api/stream.html)
[掘金资料681赞](https://juejin.cn/post/6844903891083984910)  
[掘金资料49赞](https://juejin.cn/post/6934987500540657701)
#### 定义
流（stream）是 Node.js 中处理流式数据的抽象接口,并且都是EventEmitter的实例  
#### 常见流对象
+ http服务器请求
+ 文件流
+ process.stdout  

![网络流](https://robin2017.github.io/node-notes/images/net_stream.jpg)

#### 流类型(按照生产者消费者模式理解)[图片有误，此为标准]
+ 可读：Readable(消费者：学生看黑板)
    + 服务端网络请求request
    + 文件复制源文件
    + process.stdout
+ 可写：Writable(生产者：老师写黑板)
    + 服务端网络响应response
    + 文件复制目标文件
    + process.stdin

+ 可读可写：Duplex(如net.Socket)

#### 常见接口
+ WriteStream
    + on('pipe',cbFun)
    + on('close',cbFun)
    + on('finish',cbFun)
    + write()
    + end()
+ ReadStream
    + on('data',cbFun)
    + on('open',cbFun)
    + on('close',cbFun)
    + on('end',cbFun)
    + pipe(WriteStream)
    + read()
 
![常见接口,控制台反了](https://robin2017.github.io/node-notes/images/all_stream.jpg)

 
 #### 使用场景
 + 大文件操作
 + 网络请求
 ```
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
 ```

 #### 3个输入流和3个输出流的9种pipe组合方式
 ![Pipe](https://robin2017.github.io/node-notes/images/pipe_stream.jpg)
 