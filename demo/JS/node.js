const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const data = [
  {
    title: '《天龙八部》又双叒叕翻拍，看完主演阵容，竟然有些小期待',
    description: '你没看错，经典金庸剧《天龙八部》又双叒叕翻拍了。每次经典翻拍，总是躲不过要被吐槽一番，不过，这次的选角，看起来还不错，说不定会是部真香剧呢？《天...'
  },
  {
    title: '重磅！支付宝小程序开放给个人啦！',
    description: '还在挤破头的哄抢星巴克的猫爪杯吗？0.07s被抢购一空，也不知道得单身几百年才能抢到，反正我是不行。老铁快回过头来，我跟你说一个更加爆炸的消息，...'
  },
  {
    title: '前端开发工程师语法基础：如何理解JavaScript原型？',
    description: '关注公众号【前端研究所】，后台回复“0.1”，1毛钱学习网易云前端课程 之前有讲过一次JavaScript原型和原型链的内容了，但是有很多同学和...'
  },
  {
    title: '彻底讲明白浅拷贝与深拷贝',
    description:'一、数据类型 数据分为基本数据类型(String, Number, Boolean, Null, Undefined，Symbol)和对象数据类...'
  },
  {
    title: '10个顶级的CSS3代码生成器',
    description:'新出来的在线工具和 web 应用允许开发人员快速创建网站，而无需手动一行一行地编写代码。当前，不断有新的框架和代码库涌现在前端开发这个领域里。 ...'
  },
  {
    title: '一个学习R语言的捷径，很多人可能不知道喔。',
    description:'莫扎特6岁开始作曲，写出不朽作品，是在20岁以后。Linus 11岁就开始写代码，25岁发布了Linux 1.0版本。格拉德威尔在《异类》中说：...'
  },
  {
    title: '万达主投《唐人街探案3》成本13亿石锤，让我看到了未来投资方向！',
    description:'中国的电影行业，成本一直是不透明的。所以，媒体和大众所知道的电影投资额，多数都是主创自己爆出来的，有些可能是真的，有些水分很大。 最近，万达电影...'
  },
  {
    title: '19 年学好前端的6点建议',
    description:'1. 夯实基础 要成为一名年薪30W的前端工程师，基础一定要掌握牢固，基础知识一问三不知，岂不是要贻笑大方。 css，js基础知识一定要掌握得很...'
  },
  {
    title: '将个人笔记本改造成Linux简易服务器',
    description:'利用自己大学期间用了四年多的旧电脑，彻底删去原先很不稳定的win8.1系统，安装上了Ubuntu系统，经过改造成为一台性能优良的Linux服务器...'
  },
  {
    title: 'Vue 性能优化',
    description:'得益于 Vue 的响应式系统和虚拟 DOM 系统，Vue 在渲染组件的过程中能自动追踪数据的依赖，并精确知晓数据更新的时候哪个组件需要重新渲染，...'
  },
  {
    title: '元素JavaScript知识点梳理与经典百例',
    description:'JavaScript语法： DOM操作： 数据类型 面向对象 继承 闭包 插件 作用域 跨域 原型链 模块化 自定义事件 内存泄漏 事件机制 异...'
  },
  {
    title: '最全的常见css布局',
    description:'本文概要 本文将介绍如下几种常见的布局： 一、单列布局 常见的单列布局有两种： header,content 和 footer 等宽的单列布局 ...'
  },
  {
    title: '如何学好前端：2019年web前端开发知识体系和开发工具',
    description:'在互联网行业，前端是个最近几年火起来的工种，而且持续火热中，很多同学慕名而来，纷纷加入前端大军。 蛋是，有个词叫水涨船高，来的人多了，竞争多了，...'
  }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.header();
  //允许的header类型
  // res.header();
  //跨域允许的请求方式 
  // res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.writeHead(200, {'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
  "Access-Control-Allow-Headers": "content-type"
  });
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});