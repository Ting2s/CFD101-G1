const maxItemPerPage = 2;
let pageBar = new Vue({

  el: '#perBox',
 
  data: {
    postcard: "",
    //我的明信片
    cards: [],
    //明信片收藏
    lubcards: [],
    //會員資料
    memberRows:[],
    currentPage: 1
  },
  methods: {
    nextPage() {
      this.currentPage++;
    },
    prePage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    //拉我的明信片
    myCard() {
      const xhr = new XMLHttpRequest();
      const my = this;
      xhr.onload = function () {
        if (xhr.status == 200) {
          my.cards = JSON.parse(xhr.responseText);
        } else {
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getMyCard.php", true);
      xhr.send(null);
    },

    //拉別人的明信片
    cardFavorite() {
      const xhr = new XMLHttpRequest();
      const my = this;
      xhr.onload = function () {
        if (xhr.status == 200) {
          my.lubcards = JSON.parse(xhr.responseText);
        } else {
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getLubcards.php", true);
      xhr.send(null);
    },

    //個人資料
    member() {
      const xhr = new XMLHttpRequest();
      const my = this;
      xhr.onload = function () {
        if (xhr.status == 200) {
          my.memberRows = JSON.parse(xhr.responseText);
        } else {
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getMember.php", true);
      xhr.send(null);
    },

  },

  computed: {
    //我的明信片
    getSmallList() {
      return this.cards.filter((item, index) => {
        return (
          index < this.currentPage * maxItemPerPage &&
          index >= (this.currentPage - 1) * maxItemPerPage
        );
      });
    },
    //別人的
    getSmallList_lub() {
      return this.lubcards.filter((item, index) => {
        return (
          index < this.currentPage * maxItemPerPage &&
          index >= (this.currentPage - 1) * maxItemPerPage
        );
      });
    },
    isMaxPage() {
      return this.currentPage >= this.getLastPage;
    },
    isMaxPage_lub() {
      return this.currentPage >= this.getLastPage_lub;
    },
    getLastPage() {
      return Math.ceil(this.cards.length / maxItemPerPage);
    },
    getLastPage_lub() {
      return Math.ceil(this.lubcards.length / maxItemPerPage);
    }
  },

  mounted() {
    this.myCard();
    this.cardFavorite();
    this.member();
  }
  }); 


  function Id(id){
    return document.getElementById(id);
  }; 

//===================================================
let card_btn = document.getElementById("card_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_my").classList.add("none");

  document.getElementById("dinoCon_for").classList.remove("none");

  document.getElementById("card_btn").classList.add("active");
  document.getElementById("myCard_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myCard_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_for").classList.add("none");

  document.getElementById("dinoCon_my").classList.remove("none");
  
  
  document.getElementById("myCard_btn").classList.add("active");
  document.getElementById("card_btn").classList.remove("active");
})



//-----------------------------------
//刪除我的明信片
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
  deleteBtn.addEventListener("click", function (e) {
    deleteTable.style.display = 'none';
    
  
    //後端刪除
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) {
        //傳入後端
        alert("成功刪除！");
      } else {
        alert(xhr.status);
      }
    }
    xhr.open("post", "./php/deleteCard.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    let data_info =`card_no=${Id("cardNO").value}`;
    xhr.send(data_info);
})
}

//-----------------------------------
//刪除明信片

// let deleteTable = document.getElementById('deleteTable');
// let goDelete= document.getElementById('goDelete');
// goDelete.addEventListener("click", function (){
// deleteTable.style.display='block';
// })

// //處碰box外面時也能關掉
// //window.onclick = function(e) {
//   //if (e.target == deleteTable) {
//     //deleteTable.style.display = "none";
//   //}
// //}
// let dele_close= document.getElementById('dele_close');
// dele_close.addEventListener("click", function (){
// deleteTable.style.display='none';
// })

// let cancelBtn= document.getElementById('cancelBtn');
// cancelBtn.addEventListener("click", function (){
// deleteTable.style.display='none';
// })


// let deleteBtn= document.getElementById('deleteBtn');
// deleteBtn.addEventListener("click", function (){
// alert("成功刪除！");
// deleteTable.style.display='none';
// })