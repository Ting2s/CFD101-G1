const maxItemPerPage = 3;
const maxItemPerPage_acc = 8;
let pageBar = new Vue({

  el: '#perBox',
 
  data: {
    isOcean: false,
    isGround: false,
    isSky: false,
    //================
    isHat: false,
    isTicket: false,
    isBack: false,
    //================
    postcard: "",
    //恐龍
    cards: [
      {
        dino_st:"ocean",
        picture:"images/dinoPersonal/d2.png",
        value:"龍春暉",
      },
      {
        dino_st:"ground",
        picture:"images/dinoPersonal/d2.png",
        value:"龍春暉",
      },
      {
        dino_st:"sky",
        picture:"images/dinoPersonal/d2.png",
        value:"龍春暉",
      },
    ],
    //配件
    lubcards: [
      {
        class: "hat",
        click:"myhat",
        picture:"images/dinoPersonal/prod4.png",
      },
      {
        class: "hat",
        click:"myhat",
        picture:"images/dinoPersonal/prod4.png",
      },
      {
        class: "hat",
        click:"myhat",
        picture:"images/dinoPersonal/prod4.png",
      },
      {
        class: "hat",
        click:"myhat",
        picture:"images/dinoPersonal/prod4.png",
      },
      {
        class: "hat",
        click:"myhat",
        picture:"images/dinoPersonal/prod4.png",
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
      return Math.ceil(this.cards.length / maxItemPerPage);
    },
    getLastPage_lub() {
      return Math.ceil(this.lubcards.length / maxItemPerPage_acc);
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
function myHat(e) {

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
function myTicket(e) {
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
function myBack(e) {
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