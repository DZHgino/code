const dayjs = require('dayjs');
// 1. 不符合我们自己的模块调用方式 路径+模块的名称
// 2. 不符合核心模块的规则(文档)
// 3. 第三方模块，npmjs.org 网站进行托管 npm 这个是一个命令(在安装 nodejs 的时候，自带 npm )，可以帮我们去管理第三方的包。
// 管理：安装 卸载 更新....
// npm install dayjs
const Nzh = require('nzh');
const stringRandom = require('string-random');

// 注意：引入第三方包的时候，全部放在顶部，不要出现业务代码


const nzhcn = Nzh.cn;
let money = 212;
console.log(nzhcn.toMoney(money));

// 游戏开发：产生概率 随机字符串
console.log(stringRandom(32));


// npm 常用的命令
// npm init 命令 初始化一个包，主要是为了记录项目开发者中使用那些包，以及项目的基本信息
// 安装 npm install 包名（百度 npmjs）
// 卸载 npm uninstall 包名
// 更新 npm update 包名

console.log(dayjs().format('YYYY-MM-DD'));


// let mapMoney = {
//     1: '壹',
//     2: '贰',
//     3: '叁'
// }
// 需求：财务类应用，金钱都会由数字变为大写 1 ===? 壹 2 贰
//'212' split('')
// 提取关键字： 数字转大写
