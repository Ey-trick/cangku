var imgs = document.getElementById("img-ul").getElementsByTagName('a');//获取图片
var tabs = document.getElementsByClassName("tab-li");//获取底层button
//设置循环变量
var flag = 0;
//图片自播放
var timeCount = setInterval(run,2000);

//单个播放函数
function run(){
  flag ++;
  flag = flag % imgs.length;                          //让flag++时在0-3循环
  controler(flag);
  changeIcon(flag);
}
//图片控制函数
function controler(num){
  for(let i = 0; i < imgs.length; i++){
    imgs[i].style.display = "none";
  }
  //显示图片
  imgs[num].style.display = "block";
}
//底层button随图片的自动播放而自切换
function changeIcon(num){
  for(let i = 0; i < tabs.length; i++){
    tabs[i].className = "tab-li";
  }
  tabs[num].className = "tab-li tab-on"; 
}

//手动自动的切换
var box = document.getElementsByClassName("rollpic");
const zero = 0;
  //鼠标悬停事件
box[zero].addEventListener('mouseover',function(){
  //停止自播放
  clearInterval(timeCount);
});
  //鼠标移走事件
box[zero].addEventListener('mouseout',function(){
  //开始播放
  timeCount = setInterval(run,2000);
})

//匹配底层button与img
for(let i = 0; i < tabs.length; i++){
  (function(i){
    tabs[i].addEventListener('mouseover',function(){
      controler(i);
      changeIcon(i);
      //改变滚动播放索引值
      flag = i;
    })
  })(i)//闭包，让i在事件触发时，在函数内起作用
}

//左右button点击事件
var btns = document.getElementsByClassName("show");//获取左右两个btn
const left = 0;
const right = 1;
btns[left].addEventListener('click',function(){
  flag --;
  flag = (flag + imgs.length) % imgs.length;   //让flag--时在0-3循环
  controler(flag);
  changeIcon(flag);
});
btns[right].addEventListener('click',run);
