const maxItemPerPage = 3;
const maxItemPerPage_acc = 8;
let pageBar = new Vue({

  el: '#perBox',

  data: {
    isOcean: 'ocean',
    isGround: 'ground',
    isSky: 'sky',
    //================

    isHat: 'hat',
    isTicket: 'ticket',
    isBack: 'back', 
    //================
    postcard: "",
    //恐龍
    myDino: [
      {
        dino_st: 0,
        picture: "images/dinoPersonal/d2.png",
        value: "龍春暉",
      },
      {
        dino_st: 1,
        picture: "images/dinoPersonal/d2.png",
        value: "龍春暉",
      },
      {
        dino_st: 2,
        picture: "images/dinoPersonal/d2.png",
        value: "龍春暉",
      },
      {
        dino_st: 2,
        picture: "images/dinoPersonal/d2.png",
        value: "龍春暉",
      },
    ],
    //配件
    dinoAcc: [
    ],
    currentPage: 1,

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
    //我的配件資料庫
    myAcc(){
      const xhr = new XMLHttpRequest();
      const my =this
      xhr.onload = function(){
        if (xhr.status == 200) {
      my.dinoAcc = JSON.parse(xhr.responseText);
        }else{
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getDinoAcc.php", true);
      xhr.send(null);
    },


    //=============
  },
  mounted() {
    this.myAcc();
  },
  
  computed: {
    style() {
      if (this.dinoAcc.type == 0) {
        this.isHat = true;  
      }
      if (this.dinoAcc.type == 1) {
      this.isTicket = true;
      }
      if (this.dinoAcc.type == 2) {
        this.isBack = true;
      }

    
    },
  //我的恐龍
  getSmallList() {
    return this.myDino.filter((item, index) => {
      return (
        index < this.currentPage * maxItemPerPage &&
        index >= (this.currentPage - 1) * maxItemPerPage
      );
    });
  },
  //別人的
  getSmallList_lub() {
    return this.dinoAcc.filter((item, index) => {
      return (
        index < this.currentPage * maxItemPerPage_acc &&
        index >= (this.currentPage - 1) * maxItemPerPage_acc
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
    return Math.ceil(this.myDino.length / maxItemPerPage);
  },
  getLastPage_lub() {
    return Math.ceil(this.dinoAcc.length / maxItemPerPage_acc);
  }
  }
  }); 



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
function hat(e) {

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
function ticket(e) {
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
function back(e) {
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