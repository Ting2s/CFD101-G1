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

function $id(id) {
  return document.getElementById(id);
}


$id("signup_btn").addEventListener("click", function () {
//不得有空值
if ($id("newAct").value.length == 0) {
  $id("null_1").classList.add("show");  
  $id("signup_btn").addEventListener("blur", function () {
    $id("null_1").classList.remove("show");
  });
  return;
  }
if ($id("newEmail").value.length == 0) {
  $id("null_2").classList.add("show");  
  $id("signup_btn").addEventListener("blur", function () {
    $id("null_2").classList.remove("show");
  });
   return;
  }
if ($id("newPsw").value.length == 0) {
  $id("null_3").classList.add("show");  
  $id("signup_btn").addEventListener("blur", function () {
    $id("null_3").classList.remove("show");
  });
    return;
  }
if ($id("pswCheck").value.length == 0) {
  $id("null_4").classList.add("show");  
  $id("signup_btn").addEventListener("blur", function () {
    $id("null_4").classList.remove("show");
  });
    return;
    }
  
//帳號要八個字以上
  if ($id("newAct").value.length < 8) {
    $id("lowEight").classList.add("show");
    
    $id("signup_btn").addEventListener("blur", function () {
      $id("lowEight").classList.remove("show");
    });
    return;
}

//要有英文數字  
  let en = /[a-zA-Z][\d]|[\d][a-zA-Z]/;
  if (en.test($id("newAct").value) ==false) {
    $id("EandN").classList.add("show");
    $id("signup_btn").addEventListener("blur", function () {
      $id("EandN").classList.remove("show");
  });
    return;
  }
//密碼要八個字以上
if ($id("newPsw").value.length < 8) {
  $id("lowEight_psw").classList.add("show");
  
  $id("signup_btn").addEventListener("blur", function () {
    $id("lowEight_psw").classList.remove("show");
  });
  return (false);
}
//要有英文數字
if (en.test($id("newPsw").value) ==false) {
  $id("EandN_psw").classList.add("show");
  $id("signup_btn").addEventListener("blur", function () {
    $id("EandN_psw").classList.remove("show");
});
  return;
}

//確認密碼要跟密碼一樣
if($id("pswCheck").value != $id("newPsw").value) {
  $id("check_box").classList.add("show");
  $id("signup_btn").addEventListener("blur", function () {
    $id("check_box").classList.remove("show");
});
return;
}
else {
  alert("註冊成功！");
  }
},false)

//=================================================
// 登入

//登入帳號密碼，確認後進入
function sendForm() {
    
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      let member = JSON.parse(xhr.responseText);
      if (member.mem_id != undefined) {
        alert("登入成功！");

      } else {
        alert("帳號密碼有錯誤！");
      }
    } else {
      alert(xhr.status);
    }
  }
  xhr.open("post", "./php/dinoLogin.php", true);

  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  let data_info = `mem_id=${$id("mem_id").value} & 
  mem_pw=${$id("mem_pw").value}`;
  xhr.send(data_info);
}



//==========================================
//註冊會員
// function signUp() {
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       if (xhr.status == 200) {
        
//       } else {
//         alert(xhr.status);
//       }
//   }
  
//   xhr.open("post", "../dinoSingup.php", true);
//   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   let data_info = ;
//   xhr.send(data_info);
// }
  

//==========================================
function init() {
  //點擊登入
  $id('login_btn').onclick = sendForm;
}; 
window.onload = init;
