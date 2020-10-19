// 文件的处理
const fs = require('fs');

// 需求：读取 data/test.txt 文件里面的内容 同步
const content = fs.readFileSync('./data/test.txt','utf-8');
console.log(content);


// 异步读取：通过回调函数获取内容，并且两个，第一个参数: 代表错误信息。 一般称之为错误优先
fs.readFile('./data/test.txt','utf-8', (err, data) => {
    if(err){
        // 打印 记录 logs 日志
        // throw  err;
        console.log(err);

    }else{
        console.log(data);
    }
});