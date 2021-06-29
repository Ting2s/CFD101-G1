
let card_btn = document.getElementById("card_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("myCard").classList.add("none");

  document.getElementById("card").classList.remove("none");

  document.getElementById("card_btn").classList.add("active");
  document.getElementById("myCard_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myCard_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("card").classList.add("none");

  document.getElementById("myCard").classList.remove("none");
  
  
  document.getElementById("myCard_btn").classList.add("active");
  document.getElementById("card_btn").classList.remove("active");
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
