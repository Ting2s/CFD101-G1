const maxItemPerPage = 2;
let pageBar = new Vue({

  el: '#perBox',
 
  data: {
    postcard: "",
    //我的明信片
    cards: [
      {
        card_img: "images/dinoPersonal/example3.jpg",
        value:"我與恐龍"
      },
      {
        card_img: "images/dinoPersonal/example3.jpg",
        value:"我與恐龍"
      },
      {
        card_img: "images/dinoPersonal/example3.jpg",
        value:"我與恐龍"
    },
    ],
    //明信片收藏
    lubcards: [
      {
        favorite_img: "images/dinoPersonal/example4.jpg",
        value:"他與恐龍"
      },
      {
        favorite_img: "images/dinoPersonal/example3.jpg",
        value:"別人的恐龍"
      },
      {
        favorite_img: "images/dinoPersonal/example3.jpg",
        value:"恐龍"
      },
      {
        favorite_img: "images/dinoPersonal/example3.jpg",
        value:"黑暗恐龍"
      },
    ],
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
    }

  },

  computed: {
    //我的恐龍
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
  }

  }); 




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