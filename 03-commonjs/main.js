// 使用其他的模块
const module1 = require('./module1.js');
const People = require('./module2.js');
// 代表使用第一个模块 引入的文件：叫做 模块ID 模块名称，接受变量和模块的名称一致
// require返回的是一个对象，该对象里面包含我们暴露出来的成员

console.log(module1);
console.log(module1.name);
console.log(module1.fn(1, 2));
console.log('module2', People);
// var p1 = new module2.People('xiaoming', 12);
var p2 = new People('小米', 12);
console.log(p2);
