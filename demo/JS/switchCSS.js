let change = document.getElementsByClassName('mode');
let show = document.getElementsByClassName('changeShow');
// 点击Aa显示夜间模式和字体的切换,再次点击时隐藏
change[0].addEventListener('click',function(){
  if(show[0].style.display == "block"){
    show[0].style.display = "none";
  }else{
    show[0].style.display = "block";
  }  
})
/*最开始写的是：
if(show[0].style.display == "none""){
  show[0].style.display = "block";
}else{
  show[0].style.display = "none";
}  
要点两下才能使它显示...于是改成上面那样*/
let body = document.getElementsByTagName('body')//获取所有元素，同样是一个数组
let turnOn = document.getElementById('on');//获取开按钮
let MooN = document.getElementById('Moon');//获取月亮
turnOn.addEventListener('click',function(){
  MooN.className = "light";//改变月亮颜色
  //改变背景色
  body[0].style.backgroundColor = "#393939";
  document.querySelector("div.changeShow").style.backgroundColor = "#393939";
  document.querySelector(".degree").style.backgroundColor = "#eee";
  //改变border
  document.querySelector("hr").style.borderTop = "0.5px solid #2f2f2f";
  document.querySelector("nav").style.borderBottom = "0.5px solid #2f2f2f";
  let left = document.getElementsByClassName("btn-left");//改变“开”和“宋体”的bordor
  left[0].style.border = "1px solid #2f2f2f";
  left[0].style.borderRight = "none";
  left[1].style.border = "1px solid #2f2f2f";
  left[1].style.borderRight = "none";
  let list = document.getElementsByClassName("bull");
  for(let i = 0; i < list.length; i++){
    list[i].style.borderBottom = "1px solid #2f2f2f";
  }
  //改变字体颜色
  let download = document.getElementsByClassName("level-3");
  download[1].style.color = "#969696";
  let phat = document.querySelector("strong");
  phat.style.color = "#969696";
})

let turnOff = document.getElementById('off');//获取关按钮
turnOff.addEventListener('click',function(){
  MooN.className = "moon";//改变月亮颜色
  //改变背景色
  body[0].style.backgroundColor = "#fff";
  document.querySelector("div.changeShow").style.backgroundColor = "#fff";
  document.querySelector(".degree").style.backgroundColor = "#fff";
  //改变border
  document.querySelector("hr").style.borderTop = "1px solid #eee";
  document.querySelector("nav").style.borderBottom = "0.3px solid rgba(100, 100, 100, 0.5)";
  let left = document.getElementsByClassName("btn-left");//改变“开”和“宋体”的bordor
  left[0].style.border = "1px solid #eee";
  left[0].style.borderRight = "none";
  left[1].style.border = "1px solid #eee";
  left[1].style.borderRight = "none";
  let list = document.getElementsByClassName("bull");
  for(let i = 0; i < list.length; i++){
    list[i].style.borderBottom = "1px solid #eee";
  }
  //改变字体颜色
  let download = document.getElementsByClassName("level-3");
  download[1].style.color = "#333";
  let phat = document.querySelector("strong");
  phat.style.color = "#333";
})