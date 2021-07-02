

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

