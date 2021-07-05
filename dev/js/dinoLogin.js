

function login() {
document.querySelector('.forms').className = "forms form_login_active";  
document.querySelector('.form_login').style.display = "block";
document.querySelector('.form_signup').style.opacity = "0";               

setTimeout(function () {
  document.querySelector('.form_login').style.opacity = "1";
},
  200);
  
setTimeout(function(){    
document.querySelector('.form_signup').style.display = "none";
},
  200);
  }
// ===================================================
function signUp() {
  document.querySelector('.forms').className = "forms form_signup_active";
  document.querySelector('.form_signup').style.display = "block";
  document.querySelector('.form_login').style.opacity = "0";
  
  setTimeout(function () {
    document.querySelector('.form_signup').style.opacity = "1";
},200);  

  setTimeout(function () {
    document.querySelector('.form_login ').style.display = "none";
},200);  


}    


// ===================================================
function hideAll() {

document.querySelector('.forms').className = "forms";  
document.querySelector('.form_signup').style.opacity = "0";               
document.querySelector('.form_login ').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.form_signup').style.display = "none";
document.querySelector('.form_login ').style.display = "none";
},300);  
  
  }


// ===================================================
//檢查登入

// ===================================================
//檢查新帳號
let newEmail = document.getElementById('newEmail');
let newAct = document.getElementById('newAct');
let newPsw = document.getElementById('newPsw');
let newCheck = document.getElementById('newCheck');

let signup_btn = document.getElementById('signup_btn');
let lowEight = document.getElementById("lowEight");
let EandN = document.getElementById("EandN");
let lowEight_psw = document.getElementById("lowEight_psw");
let EandN_psw = document.getElementById("EandN_psw");



signup_btn.addEventListener("click", function () {

//不得有空值
if (newAct.value.length == 0) {
  alert("不得為空值！")
  return;
  }
if (newEmail.value.length == 0) {
  alert("不得為空值！")
   return;
  }
if (newPsw.value.length == 0) {
    alert("不得為空值！")
    return;
  }
if (newCheck.value.length == 0) {
    alert("不得為空值！")
    return;
    }
  // if (newAct.value.length == 0 | newEmail.value.length == 0 | newPsw.value.length == 0 |newCheck.value.length == 0 ) {
  //   alert("不得為空值！")
  //   return;
  // 

  
//帳號要八個字以上
  if (newAct.value.length < 8) {
    lowEight.classList.add("show");
    
    signup_btn.addEventListener("blur", function () {
      lowEight.classList.remove("show");
    });
    return (false);
}

//要有英文數字  
  if (!(newAct.keyCode >= 65 && newAct.keyCode <= 90)
  ||( (!(newAct.keyCode >= 48 && newAct.keyCode <= 57))
    ||
    (!(newAct.keyCode >= 96 && newAct.keyCode <= 105))
  )) {
  EandN.classList.add("show");
  signup_btn.addEventListener("blur", function () {
    EandN.classList.remove("show");
  });
    return;
  }
//密碼要八個字以上
if (newPsw.value.length < 8) {
  lowEight_psw.classList.add("show");
  
  signup_btn.addEventListener("blur", function () {
    lowEight_psw.classList.remove("show");
  });
  return (false);
}
//要有英文數字
if (!(newPsw.keyCode >= 65 && newPsw.keyCode <= 90)
||( (!(newPsw.keyCode >= 48 && newPsw.keyCode <= 57))
  ||
  (!(newPsw.keyCode >= 96 && newPsw.keyCode <= 105))
)) {
EandN_psw.classList.add("show");
signup_btn.addEventListener("blur", function () {
  EandN_psw.classList.remove("show");
});
  return;
}

//確認密碼要跟密碼一樣
if(newCheck.value != newPsw.value) {
  alert("確認密碼與密碼不相符！");
  return;
  }
})

