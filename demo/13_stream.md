---
title: 3、流stream模块
order: 13
---
#### 参考资料
[掘金资料681赞](https://juejin.cn/post/6844903891083984910)  
[掘金资料49赞](https://juejin.cn/post/6934987500540657701)
#### 定义
流（stream）是 Node.js 中处理流式数据的抽象接口,并且都是EventEmitter的实例  
#### 常见流对象
+ http服务器请求
+ 文件流
+ process.stdout  

![网络流](https://net_stream.jpeg)

#### 流类型
+ 可读：Readable
+ 可写：Writable
+ 可读可写：Duplex(如net.Socket)

 
 #### 使用场景
 + 大文件操作
 + 网络请求