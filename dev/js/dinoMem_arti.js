
let card_btn = document.getElementById("arti_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("myArti").classList.add("none");

  document.getElementById("arti").classList.remove("none");

  document.getElementById("arti_btn").classList.add("active");
  document.getElementById("myArti_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myArti_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("arti").classList.add("none");

  document.getElementById("myArti").classList.remove("none");
  
  
  document.getElementById("myArti_btn").classList.add("active");
  document.getElementById("arti_btn").classList.remove("active");
})








//-----------------------------------
let modal = document.getElementById("myModal_1");


let img = document.getElementById("card_1");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption_1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


let span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}