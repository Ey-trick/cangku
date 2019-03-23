const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const data = [
  {
    title: '《天龙八部》又双叒叕翻拍，看完主演阵容，竟然有些小期待',
    img: 'http://upload-images.jianshu.io/upload_images/1864602-fb0201e283418698.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description: '你没看错，经典金庸剧《天龙八部》又双叒叕翻拍了。每次经典翻拍，总是躲不过要被吐槽一番，不过，这次的选角，看起来还不错，说不定会是部真香剧呢？《天...'
  },
  {
    title: '重磅！支付宝小程序开放给个人啦！',
    img: 'http://upload-images.jianshu.io/upload_images/15233518-1cbd3a8d5eff56b2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    description: '还在挤破头的哄抢星巴克的猫爪杯吗？0.07s被抢购一空，也不知道得单身几百年才能抢到，反正我是不行。老铁快回过头来，我跟你说一个更加爆炸的消息，...'
  },
  {
    title: '前端开发工程师语法基础：如何理解JavaScript原型？',
    img: 'http://upload-images.jianshu.io/upload_images/15405328-c12667311271093f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description: '关注公众号【前端研究所】，后台回复“0.1”，1毛钱学习网易云前端课程 之前有讲过一次JavaScript原型和原型链的内容了，但是有很多同学和...'
  },
  {
    title: '彻底讲明白浅拷贝与深拷贝',
    img: 'http://upload-images.jianshu.io/upload_images/15233854-0dbed0eac0694441.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'一、数据类型 数据分为基本数据类型(String, Number, Boolean, Null, Undefined，Symbol)和对象数据类...'
  },
  {
    title: '10个顶级的CSS3代码生成器',
    img: 'http://upload-images.jianshu.io/upload_images/15233518-b2a1b9d485713f0a.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'新出来的在线工具和 web 应用允许开发人员快速创建网站，而无需手动一行一行地编写代码。当前，不断有新的框架和代码库涌现在前端开发这个领域里。 ...'
  },
  {
    title: '一个学习R语言的捷径，很多人可能不知道喔。',
    img: 'http://upload-images.jianshu.io/upload_images/16555213-7e487d73a13fe91f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'莫扎特6岁开始作曲，写出不朽作品，是在20岁以后。Linus 11岁就开始写代码，25岁发布了Linux 1.0版本。格拉德威尔在《异类》中说：...'
  },
  {
    title: '万达主投《唐人街探案3》成本13亿石锤，让我看到了未来投资方向！',
    img: 'http://upload-images.jianshu.io/upload_images/525624-05f4df58f4a6d154.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'中国的电影行业，成本一直是不透明的。所以，媒体和大众所知道的电影投资额，多数都是主创自己爆出来的，有些可能是真的，有些水分很大。 最近，万达电影...'
  },
  {
    title: '19 年学好前端的6点建议',
    img: 'http://upload-images.jianshu.io/upload_images/525624-05f4df58f4a6d154.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'1. 夯实基础 要成为一名年薪30W的前端工程师，基础一定要掌握牢固，基础知识一问三不知，岂不是要贻笑大方。 css，js基础知识一定要掌握得很...'
  },
  {
    title: '将个人笔记本改造成Linux简易服务器',
    img: 'http://upload-images.jianshu.io/upload_images/9028759-c0696ece0dfd0faf.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    description:'利用自己大学期间用了四年多的旧电脑，彻底删去原先很不稳定的win8.1系统，安装上了Ubuntu系统，经过改造成为一台性能优良的Linux服务器...'
  },
  {
    title: 'Vue 性能优化',
    img: 'http://upload-images.jianshu.io/upload_images/14847428-6a9f999d4183f4fd.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    description:'得益于 Vue 的响应式系统和虚拟 DOM 系统，Vue 在渲染组件的过程中能自动追踪数据的依赖，并精确知晓数据更新的时候哪个组件需要重新渲染，...'
  },
  {
    title: '元素JavaScript知识点梳理与经典百例',
    img: 'http://upload-images.jianshu.io/upload_images/7528671-04de4a440a484328.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    description:'JavaScript语法： DOM操作： 数据类型 面向对象 继承 闭包 插件 作用域 跨域 原型链 模块化 自定义事件 内存泄漏 事件机制 异...'
  },
  {
    title: '最全的常见css布局',
    img: 'http://upload-images.jianshu.io/upload_images/2539976-b307feca9cbd6b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'本文概要 本文将介绍如下几种常见的布局： 一、单列布局 常见的单列布局有两种： header,content 和 footer 等宽的单列布局 ...'
  },
  {
    title: '如何学好前端：2019年web前端开发知识体系和开发工具',
    img: 'http://upload-images.jianshu.io/upload_images/9693047-9473838d745aac14?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    description:'在互联网行业，前端是个最近几年火起来的工种，而且持续火热中，很多同学慕名而来，纷纷加入前端大军。 蛋是，有个词叫水涨船高，来的人多了，竞争多了，...'
  },
  {
    title: '知否4位参演《都挺好》的演员，常嬷嬷变年轻，平宁郡主依旧顽固',
    img: 'http://upload-images.jianshu.io/upload_images/14596325-f381fd5356e71ebe.jpg',
    description:'由《知否知否应是绿肥红瘦》同一公司正午阳光出品的《都挺好》不仅剧情一样精彩，追剧时童鞋们发现有四张熟面孔了吗？ 高露：林小娘苏家大儿媳吴非 知性...'
  },
  {
    title: '跨域',
    img: 'http://upload-images.jianshu.io/upload_images/1835449-e5b3003f66a09abc.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'前言 前后端数据交互经常会碰到请求跨域，什么是跨域，以及有哪几种跨域方式，这是本文要探讨的内容。 1. 什么是跨域？ 1.1 什么是同源策略及其...'
  },
  {
    title: 'Angular、React、Vue三选一，前端工程师更喜欢哪款框架？',
    img: 'http://upload-images.jianshu.io/upload_images/16358970-bbb9bcc2bafa593c?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'现在前端三架马车Angular、React、Vue各有所长。Angular从一开始就带有很明显的工程化血统，齐全的cli命令，背靠TypeScr...'
  },
  {
    title: 'WebAuthn 成为正式 Web 标准',
    img: 'http://upload-images.jianshu.io/upload_images/8207483-e8de4c916a3eb85e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'万维网联盟（W3C）与 FIDO 联盟近日宣布，Web 认证（Web Authentication，简称 WebAuthn）现已成为正式 Web...'
  },
  {
    title: 'Markdown简明教程',
    img: 'http://upload-images.jianshu.io/upload_images/11345863-7dc3567586eaacbf.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    description:'Markdown简明语法 Markdown和扩展Markdown简洁的语法 代码块高亮 图片链接和图片上传 LaTex数学公式 离线写博客 导入...'
  }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
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