window.onload = function(){
  let oUl = document.getElementById('ul1');
  let aLi = document.getElementsByClassName('bull');
  let iLen = aLi.length;
  let iPage = 1;
  let b = true; //相当于门/开关（如果门是开的 才能进去，然后锁门，做自己的事情，做完，再打开门）
  let len = 0;    
      
  getList(); //进行第一页的加载
      
  //获取初始化数据，首先，通过ajax加载数据过来
  function getList(){
    let _index = aLi.length -1;
    ajax('get','http://127.0.0.1:3000','cpage='+iPage,function(data){
      let data1 = JSON.parse(data);
      console.log(data1);
      console.log(data);
      //做一下处理，数据不可能无限加载下去，如果数据没了，不能再加载了
      if( !data1.length){
      //后续没有数据了
        return; //return出去了，没有机会把门打开了   
      }
      //把数据一条一条的添加到页面中
      for(let i=_index;i<data1.length;i++){
        let olist = document.createElement('li');
        olist.className = "bull";              
        let Title = document.createElement('a');
        Title.className = "title";        
        let strong = document.createElement('strong');
        strong.innerHTML = data1[i].title;
        Title.appendChild(strong);  
        let oa = document.createElement('a');
        oa.className = "pic";
        let oImg = document.createElement('img');
        oImg.src = data1[i].preview;
        oa.appendChild(oImg); //把当前图片添加到当前a里
        oImg.style.width = '148px';
        oImg.style.height = '100px';
        let oP = document.createElement('p');
        oP.className = "abstract";
        oP.innerHTML = data1[i].description;
        oa.appendChild(oP);                
        //把整个div添加到最短li里
        olist.appendChild(oa);
        //把所有元素放入li
        olist.appendChild(Title);
        olist.appendChild(oP);
        oUl.appendChild(olist);
        if(i-_index == 8){
          _index++;
          break;
        }     
      }
      b = true; //把门打开
    });            
  }
  //当滚动条发生滚动时,判断最短的li是否进入可视区
  window.onscroll = function(){
    ajax('get','http://127.0.0.1:3000','cpage='+iPage,function(data){
      let data1 = JSON.parse(data);
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;            
      //如果当前的li的top值+自身的高<可视区的高+滚动条滚动距离
      if(document.documentElement.scrollHeight - scrollTop == document.documentElement.clientHeight){
        if(b){
          b = false; //进去以后把门关上，然后做自己的事情
          iPage++;
          getList();
        }
      }
    });
  }          
  function getTop(obj){
    var iTop = 0; //初始化为0
    while(obj){  //当obj存在
      iTop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    return iTop;
  }
}      