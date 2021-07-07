
let card_btn = document.getElementById("arti_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_my").classList.add("none");

  document.getElementById("dinoCon_for").classList.remove("none");

  document.getElementById("arti_btn").classList.add("active");
  document.getElementById("myArti_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myArti_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_for").classList.add("none");

  document.getElementById("dinoCon_my").classList.remove("none");
  
  
  document.getElementById("myArti_btn").classList.add("active");
  document.getElementById("arti_btn").classList.remove("active");
})