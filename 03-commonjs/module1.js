// 第一个模块
// const exports = module.exports; // 底层

let name = 'module1';

function fn(a, b) {
    return a + b
}

function People(name,age) {
    this.name = name;
    this.age = age;
}

// 如果两种方式都写了，那么该如何执行呢？ 一起使用的，方式一失效了。 为什么会失效呢？
// 讲解：exports 是 module.exports 一个引用。但是模块实际返回的是 module.exports


//  方式二：对象传统写法。 es6 简写
module.exports = {
    fn,
    People
}

// 方式一：
exports.name = name; // 代表 name 外部可以使用了
// exports.fn = fn;
// exports.People = People;


// return module.exports;