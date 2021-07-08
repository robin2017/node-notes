const fs = require('fs');
const path = require('path');

// 递归创建文件夹
function recurMkdirSync(dirPath) {
  function loop(p) {
    if (!fs.existsSync(path.dirname(p))) {
      loop(path.dirname(p));
    }
    fs.mkdirSync(p);
  }
  const absolutePath = path.resolve(dirPath);
  loop(absolutePath);
}

// 文件夹复制
function copyDirSync(fromFilePath, toFilePath) {
  if (!fs.existsSync(fromFilePath)) throw new Error('源路径不存在');
  function loop(from, to) {
    if (fs.statSync(from).isFile()) {
      const toParent = path.dirname(to);
      if (!fs.existsSync(toParent)) {
        recurMkdirSync(toParent);
      }
      return fs.copyFileSync(from, to);
    }
    const files = fs.readdirSync(from);
    files.forEach((file) => {
      loop(path.resolve(from, file), path.resolve(to, file));
    });
  }
  loop(fromFilePath, toFilePath);
}
copyDirSync('images', 'build/images');