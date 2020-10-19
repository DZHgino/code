const os = require('os'); // 引入的时候，直接写模块的名称即可（核心模块的名称查看官方文档左侧）http://nodejs.cn/api/os.html

// 使用 操作系统的cup的信息
console.log(os.cpus());

// 操作系统的位数
console.log(os.arch());