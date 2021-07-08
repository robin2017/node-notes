---
title: 2、本地路径path模块
order: 12
---

#### 常见API
+ 1、获取目录
  + dirname(path:string):string
+ 2、获取扩展名
  + extname(path:string):string
+ 3、拼接
  + join(...paths:string):string
+ 4、解析为绝对路径
  + resolve(...paths:string):string

#### 特殊环境变量
+ _dirname:获取当前模块文件所在目录的完整绝对路径

resolve和join区别
```
console.log(path.resolve('/a', 'b'));
console.log(path.resolve('a', 'b')); // 第一个参数为相对时，则前面会添加_dirname
console.log(path.join('/a', 'b'));
console.log(path.join('a', 'b'));
// /a/b
// /Users/luobin/workspace/RobinWorkSpace/node-notes/src/path/a/b
// /a/b
// a/b
```


 