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


#### 流类型(按照生产者消费者模式理解)[图片正确]
> process.stdin/stdout有时候混了，也可以用，这个特别注意
> 记忆方法：process.stdin.pipe(process.stdout)
+ 可读：Readable(消费者：学生看黑板)
    + 服务端网络请求request
    + 文件复制源文件
    + process.stdin  
+ 可写：Writable(生产者：老师写黑板)
    + 服务端网络响应response
    + 文件复制目标文件
    + process.stdout


+ 可读可写：Duplex(如net.Socket)

#### 常见接口
+ 实例化
    + fs.createReadStream(filePath:string):ReadStream
    + fs.createWriteStream(filePath:string):WriteStream
+ WriteStream
    + on('pipe',cbFun)
    + on('close',cbFun)
    + on('finish',cbFun)
    + on('drain',cbFun)：部分写入完成(用于通知readStream继续读)
    + write()：写数据(此时需要停止读)
    + end()：必须手动结束
+ ReadStream
    + on('data',cbFun) ：监听时内部会开启数据传输
    + on('open',cbFun)
    + on('close',cbFun)
    + on('end',cbFun)：读完了所有(用于通知writeStream结束)
    + pipe(WriteStream)
    + read()
    + pause()：暂停读(写数据的时候)
    + resume()：继续读(部分写入完成)


![常见接口,控制台反了](https://robin2017.github.io/node-notes/images/all_stream.jpg)
 #### 流使用场景
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
 ![Pipe](https://robin2017.github.io/node-notes/images/pipe_stream.png)
 
 ```
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

 ```
 ![Post](https://robin2017.github.io/node-notes/images/post_stream.jpg)


 #### 流和非流方式差别
 ```
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
 ```
 #### pipe和非pipe差别
 > pipe没法查看进度
```
 // 2-1、(文件复制源文件).pipe(文件复制目标文件) 
fs.createReadStream('_data_.file').pipe(fs.createWriteStream('_copy_.file'))
```
可以看进度
[code](https://github.com/robin2017/node-notes/blob/main/src/stream/read_progress.js)
 
