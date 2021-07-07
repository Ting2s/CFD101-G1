

//==================================
let dinoAcc_btn = document.getElementById("dinoAcc_btn");
dinoAcc_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_my").classList.add("none");
  document.getElementById("dino_p").classList.add("none");
  document.getElementById("dinoCon_acc").classList.remove("none");
  document.getElementById("dinoAcc_p").classList.remove("none");
  
  

  document.getElementById("dinoAcc_btn").classList.add("active");
  document.getElementById("dino_btn").classList.remove("active");
})

//-----------------------------------
let dino_btn = document.getElementById("dino_btn");
dino_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_acc").classList.add("none");
  document.getElementById("dinoAcc_p").classList.add("none");
  document.getElementById("dinoCon_my").classList.remove("none");
  document.getElementById("dino_p").classList.remove("none");
  
  
  document.getElementById("dino_btn").classList.add("active");
  document.getElementById("dinoAcc_btn").classList.remove("active");
})

//-----------------------------------
// 替代圖片

// 帽子拖曳
function myHat(e) {
  document.getElementById("myHat").src = e.target.src;
  document.getElementById("hat_frame").style.display = "block";
}
$(function () {
  $("#hat_frame").draggable({ containment: ".perFrame", scroll: false });
});

// 紋身拖曳
function myTicket(e) {
  document.getElementById("myTicket").src = e.target.src;
  document.getElementById("ticket_frame").style.display = "block";
}
$(function () {
  $("#ticket_frame").draggable({ containment: ".perFrame", scroll: false });
});

// 背景拖曳
function myBack(e) {
  document.getElementById("myBack").src = e.target.src;
  document.getElementById("back_frame").style.display = "block";
}
$(function () {
  $("#back_frame").draggable({ containment: ".perFrame", scroll: false });
});