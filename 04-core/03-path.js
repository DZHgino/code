const path = require('path');

// 特殊变量
console.log('__dirname', __dirname);
// 代表当前文件的绝对路径（Windows下代表有盘符 d:/data/test.txt linux 以 /开头  /var/www/html/index.html）
console.log('__filename', __filename); // 代表当前文件的绝对路径


// 文件的路径
let fileName = './data/test.txt';

let absPath = path.resolve(__dirname, fileName); // 方法可以把一个文件处理为绝对路径

console.log(absPath);


console.log(path.join(__dirname, fileName));

let imgName = '1.jpg';
console.log(path.extname(imgName));
// 获取文件的扩展名 test.txt 文件扩展名 .txt  1.jpg 文件扩展 .jpg