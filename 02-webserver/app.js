// 需求：使用nodejs搭建一个 web 服务器，提供web服务（网页服务）
// 提供一个 核心模块可以做web http
// 提前一点知识 引入模块、
const http = require('http'); // 一般我们引入的模块，都是拿来使用，而不需要更改，则一般定义为常量接受（一旦声明不可更改）。var弊端：1. 重复声明 2. 预解析
const fs = require('fs');

// b/s
// 一般用户通过浏览器向服务器发送请求的时候，回调函数执行，可以给浏览器进行响应
/**
 * request 请求头 代表请求信息（URL地址参数 index.php?name=caoyang&age=1 user-agent cookie...）
 * response 响应头 代表响应信息 代表是服务器要传递给浏览器的信息 字符串 网页 响应头 cookie
 * @type {Server}
 */
const server = http.createServer( (request, response)=> {
    // 请求信息： 1. url 地址 2. 方法 get post
    let url = request.url;
    let method = request.method;
    console.log(url, method); // /index.html /about.html
    let content = '';

    if( url === '/index.html' ){
        // 响应网站的首页
        content  = fs.readFileSync('./tpls/index.html', 'utf-8');

    }else if( url === '/about.html'){
        // 响应关于页面
        content = fs.readFileSync('./tpls/about.html', 'utf-8');
    }else {
        // 响应请求的内容不存在
        content = fs.readFileSync('./tpls/404.html', 'utf-8');
    }

    // 1. 要知道用户请求的是什么  2. 读取对应的文件进行响应

    // 响应
    // response.write('hi nodejs!!!!!!!!!!!!!!!!'); // 代表响应
    // response.write('hi nodejs2!'); // 代表响应 多次
    response.write(content);
    response.end();// 结束响应，内容返回给浏览器

}); // 服务器对象 提供web服务

// 服务器运行的服务 1. 运行起来（监听端口） 2. 24小时不间断
const port = 8080; // 端口：1-65535之间，但是 1-1024之间尽量不要使用，操作系统一般会内部使用 apache 80 普通开发：1024之后的端口
server.listen(port, () => {
    console.log('server is running at port ' + port);
});


//TODO  1.  require  http (模块化)
//TODO  2. 修改代码后，需要手工的重启，才可以看到最新的效果（npm nodemon）
//TODO  3. 希望不要只是响应基本的字符串，希望可以响应一些网页内容（标签）(磁盘进行交互 读取磁盘文件 fs)
//TODO  4. 目前来说，无论地址栏输入任何URL地址，响应的内容都不变，动态的变化 index.html ---> index.html 内容 about.html ----> about.html

