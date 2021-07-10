

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
function Id(id){
  return document.getElementById(id);
};  
// 帽子拖曳
function myHat(e) {

  Id("myHat").src = e.src;
  Id("myHat").innerHTML = e.alt;
  Id("hat_frame").style.display = "block";
  
  $("#hat_frame").click(function () {
    $("#hat_frame").toggle(1000);
  });
}
$(function () {
  $("#hat_frame").draggable({ containment: ".perFrame", scroll: false });
});

// 紋身拖曳
function myTicket(e) {
  Id("myTicket").src = e.src;
  Id("myTicket").innerHTML = e.alt;

  Id("ticket_frame").style.display = "block";
  
  $("#ticket_frame").click(function () {
    $("#ticket_frame").toggle(1000);
  });

}
$(function () {
  $("#ticket_frame").draggable({ containment: ".perFrame", scroll: false });
});

// 背景拖曳
function myBack(e) {
  Id("myBack").src = e.src;
  Id("myBack").innerHTML = e.alt;

  Id("back_frame").style.display = "block";
 
  $("#back_frame").click(function () {
    $("#back_frame").toggle(1000);
  });

}
$(function () {
  $("#back_frame").draggable({ containment: ".perFrame", scroll: false });
});