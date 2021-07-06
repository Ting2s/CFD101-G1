

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


