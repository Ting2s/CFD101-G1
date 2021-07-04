// 展開大圖
let openModel = function (e) {

  let modal = document.getElementById("myModal_1");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption_1");
  
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
let deleteCard = function () {
  let deleteTable = document.getElementById('deleteTable');
  deleteTable.style.display = 'block';


let dele_close= document.getElementById('dele_close');
  dele_close.addEventListener("click", function (){
  deleteTable.style.display="none";
  })
  
  let cancelBtn= document.getElementById('cancelBtn');
  cancelBtn.addEventListener("click", function (){
  deleteTable.style.display="none";
  })
  
  
  let deleteBtn= document.getElementById('deleteBtn');
  deleteBtn.addEventListener("click", function (){

    deleteTable.style.display = 'none';
    alert("成功刪除！");
    e.stopPropagation(); 
  })
}
