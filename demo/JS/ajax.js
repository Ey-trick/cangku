// function success(text) {
//   var textarea = document.getElementById('test-response-text');
//   textarea.value = text;
// }

// function fail(code) {
//   var textarea = document.getElementById('test-response-text');
//   textarea.value = 'Error code: ' + code;
// }

// var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

// request.onreadystatechange = function () { // 状态发生变化时，函数被回调
//   if (request.readyState === 4) { // 成功完成
//       // 判断响应结果:
//       if (request.status === 200) {
//           // 成功，通过responseText拿到响应的文本:
//           console.log(request.responseText);
//       } else {
//           // 失败，根据响应码判断失败原因:
//           console.log(request.status);
//       }
//   } else {
//       // HTTP请求还在继续...
//   }
// }

// // 发送请求:
// request.open('GET', 'http://127.0.0.1:3000/');
// request.send();
// function success1(data) {
//   console.log(123)
//   console.log(data);
// }
function ajax(method, url, data, success) {
  let xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (e) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  
  // if (method == 'get' && data) {
  //     url += '?' + data;
  // }
  xhr.open(method,url);
  if (method == 'get') {
    xhr.send();
  } else {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  }
  
  xhr.onreadystatechange = function() {      
    if ( xhr.readyState == 4 ) {
      if ( xhr.status == 200 ) {
        success(xhr.responseText);
      } else {
        alert('出错了,Err：' + xhr.status);
      }
    }      
  }
}
