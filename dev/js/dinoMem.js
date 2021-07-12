//=====================================
  
//-------------------------------------
function Id(id){
  return document.getElementById(id);
}; 

// 展開大圖


let openModel = function (e) {

let modal =Id("myModal");
let modalImg =Id("img");
let captionText =Id("caption");
  
    modal.style.display = "block";
    modalImg.src = e.src;
    captionText.innerHTML = e.alt;
  
  
  
  let span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() { 
    modal.style.display = "none";
    }
}
  
//=================================================== 
  //處碰box外面時也能關掉
  //window.onclick = function(e) {
    //if (e.target == deleteTable) {
      //deleteTable.style.display = "none";
    //}
  //}

//刪除明信片

function delete_go() {

let deleteTable = Id("deleteTable");
deleteTable.style.display = 'block';


let dele_close = Id('dele_close');
dele_close.addEventListener("click", function () {
deleteTable.style.display = "none";
})
  
let cancelBtn = Id('cancelBtn');
cancelBtn.addEventListener("click", function () {
deleteTable.style.display = "none";
})

  let deleteBtn = Id("deleteBtn");
  let ul = Id("ul_1");

deleteBtn.addEventListener("click", function (e) {
  deleteTable.style.display = 'none';
  alert("成功刪除！");
  e.target.style.display = "none";
  // ul.removeChild(e.target.parentNode);
})
}
// let deleteCard = function (e) {
  
//   deleteTable.style.display = 'block';

//   let deleteBtn = Id("deleteBtn");
//   deleteBtn.addEventListener("click", function () {
//     alert("成功刪除！");
//     deleteTable.style.display = 'none';

//   })
  
//=================================================== 

  
// }

// window.addEventListener("load", function () {
//   deleteCard;
// })
