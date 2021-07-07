
let card_btn = document.getElementById("card_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_my").classList.add("none");

  document.getElementById("dinoCon_for").classList.remove("none");

  document.getElementById("card_btn").classList.add("active");
  document.getElementById("myCard_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myCard_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_for").classList.add("none");

  document.getElementById("dinoCon_my").classList.remove("none");
  
  
  document.getElementById("myCard_btn").classList.add("active");
  document.getElementById("card_btn").classList.remove("active");
})








//-----------------------------------

//-----------------------------------
//刪除明信片

// let deleteTable = document.getElementById('deleteTable');
// let goDelete= document.getElementById('goDelete');
// goDelete.addEventListener("click", function (){
// deleteTable.style.display='block';
// })

// //處碰box外面時也能關掉
// //window.onclick = function(e) {
//   //if (e.target == deleteTable) {
//     //deleteTable.style.display = "none";
//   //}
// //}
// let dele_close= document.getElementById('dele_close');
// dele_close.addEventListener("click", function (){
// deleteTable.style.display='none';
// })

// let cancelBtn= document.getElementById('cancelBtn');
// cancelBtn.addEventListener("click", function (){
// deleteTable.style.display='none';
// })


// let deleteBtn= document.getElementById('deleteBtn');
// deleteBtn.addEventListener("click", function (){
// alert("成功刪除！");
// deleteTable.style.display='none';
// })