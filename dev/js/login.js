
//==========================================
function $id(id) {
  return document.getElementById(id);
}
// 登入系統
function sendForm() { 
let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status == 200) {
    var member = JSON.parse(xhr.responseText);
      if (member.mem_id != undefined) {
        alert("登入成功！");
         //替換登入鍵
        $id('Avatar').style.display = "block";
        $id('SignIn').classList.add("remove");
    
        // 跳轉到會員中心
        window.location.href='./dinoMem_profile.html';
      }else {
        alert("帳號密碼有錯誤！");
    }
  } else {
  alert(xhr.status);
  }
  }
  
xhr.open("post", "./php/dinoLogin.php", true);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//從後端需要的資料
let data_info = `mem_id=${$id("mem_id").value}&mem_pw=${$id("mem_pw").value}`;
xhr.send(data_info);
}

var member;
function checkLog() {
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    member = JSON.parse(xhr.responseText);
    if (member.mem_id != undefined) {
    //替換登入鍵
    $id('Avatar').style.display = "block";
    $id('SignIn').classList.add("remove");
    }
  }
  xhr.open("get", "./php/checkLog.php",true);
  xhr.send(null);
}
//==========================================
//註冊會員
function signForm() {
let xhr = new XMLHttpRequest();
xhr.onload = function () {
if (xhr.status == 200) {


if (xhr.responseText == 1) {
  alert("註冊成功！請重新登入！");
  location.reload();

} else {
  alert("此帳後已存在，不可註冊！");
}
}else {
alert(xhr.status);
}
}
xhr.open("post", "./php/dinoSignup.php", true);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

let data_info = `mem_id=${$id("newAct").value}&mem_pw=${$id("newPsw").value}&mem_email=${$id("newEmail").value}`;
xhr.send(data_info);
}

//==========================================
//會員登出
$id('logout').addEventListener('click', function () {
  
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      alert("已順利登出！");
      //歸還登入鍵
      $id('Avatar').style.display = "none";
      $id('SignIn').classList.remove("remove");
      //跳回首頁
      window.location.href='./index.html';
    }
    else {
      alert(xhr.status);
    }
  }
  xhr.open("get", "./php/dinoLogout.php", true);
  xhr.send(null);
})

//==========================================

window.addEventListener("load", function(){
  checkLog();
  $id('signup_btn').onclick = signForm;
  $id('login_btn').onclick = sendForm;  
})
