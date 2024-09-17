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