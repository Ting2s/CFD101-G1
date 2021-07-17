let Avatar = document.querySelector('.Avatar');
let Member = document.querySelector('.Member');

Avatar.addEventListener('mouseenter', () => {
    Member.style.display = `block`
});
Avatar.addEventListener('mouseleave', () => {
    Member.style.display = `none`
});

//會員箱

let Avatar_box = document.querySelector('.Avatar-box');
let isShowSlide = false;
Avatar.addEventListener('click', function (e) {
    isShowSlide =! isShowSlide
    if (isShowSlide) {
        console.log(true);
        Avatar_box.classList.remove("remove");
        Avatar_box.classList.add("show");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        Avatar_box.classList.add("remove"); 
        Avatar_box.classList.remove("show");    
    }
}, false);



// 登入系統

//登入帳號密碼，確認後進入
function $id(id) {
    return document.getElementById(id);}


function sendForm() { 
let xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status == 200) {
    let member = JSON.parse(xhr.responseText);
    if (member.mem_id != undefined) {
        alert("登入成功！");
        
        
        //替換登入鍵
        $id('Avatar').style.display = "block";
        $id('SignIn').classList.add("remove");

        // 跳轉到會員中心
        // window.location.replace('./dinoMem_profile.html');

    } else {
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
//==========================================
//註冊會員
function signForm() {
let xhr = new XMLHttpRequest();
xhr.onload = function () {
if (xhr.status == 200) {
let member = JSON.parse(xhr.responseText);
    
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

//==========================================
//會員登出
document.getElementById('logout').addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if (xhr.status == 200) {
        alert("已順利登出！");
        
        
        //歸還登入鍵
        $id('Avatar').style.display = "none";
        $id('SignIn').classList.remove("remove");
        
        //跳回首頁
        window.location.replace('./index.html');
    }
    else {
        alert(xhr.status);
    }
    }
    xhr.open("post", "./php/dinoLogout.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(null);
})


function init() {
$id('login_btn').onclick = sendForm;
$id('signup_btn').onclick = signForm;
}; 
window.onload = init;