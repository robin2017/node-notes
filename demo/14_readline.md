---
title: 4、逐行读取readline模块
order: 14
---

#### 参考资料
[官网](https://nodejs.org/dist/latest-v14.x/docs/api/readline.html)  

 
#### 常见接口
> 文件处理时，output可以不填，直接用writeStream在外面处理
+ 实例化
  + readline.createInterface({input: ReadStream,output: WriteStream})
+ ReadLine
  + on('line',cbFun)
  + on('pause',cbFun)
  + on('resume',cbFun)
  + question(title:string,cbFun)
  + close()
  + pause()
  + sresume()

#### 常见使用场景
[code](https://github.com/robin2017/node-notes/blob/main/src/readline/index.js)
+ 命令行询问
+ 文件处理
