// 第二个模块
// 第一个模块

let name = 'module2';

function fn(a, b) {
    return a + b
}

function People(name,age) {
    this.name = name;
    this.age = age;
}

// exports.userName = name; // 暴露出去的属性可以自己定义

module.exports = People; // 如果一个模块里面只暴露类，则可以直接赋值
/*
module.exports = {
    People
}*/
