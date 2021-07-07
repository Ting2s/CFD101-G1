//=====================================
//更換頁碼
let pageBar = new Vue({

  el: '#perBox',
  data: {
    all: 3, //總頁數
    cur: 1,//當前頁碼
    
  },
  methods: {
    //選擇商品
    choose: function () {
      
    }
  },

  computed: {
    // 顯示最後一頁
    showLast: function () {
      if (this.cur >= this.all) {
        return false;
      }
      return true
    },
    
    // 顯示第一頁
    showFirst: function () {
      if (this.cur > 1) {
        return true
      }
      return false;
    },
  },

  }); 
  
  //-------------------------------------


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
let deleteCard = function (e) {
  let deleteTable = document.getElementById('deleteTable');
  deleteTable.style.display = 'block';

  let deleteBtn= document.getElementById('deleteBtn');
  deleteBtn.addEventListener("click", function () {
    alert("成功刪除！");
    deleteTable.style.display = 'none';
    detachEvent();
  })
  
  
let dele_close= document.getElementById('dele_close');
  dele_close.addEventListener("click", function (){
  deleteTable.style.display="none";
  },false)
  
  let cancelBtn= document.getElementById('cancelBtn');
  cancelBtn.addEventListener("click", function (){
  deleteTable.style.display="none";
  },false)
  
}

// window.addEventListener("load", function () {
//   deleteCard
// })

  
