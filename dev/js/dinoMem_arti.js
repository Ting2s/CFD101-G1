const maxItemPerPage = 3;
let pageBar = new Vue({

  el: '#perBox',
 
  data: {
    postcard: "",
    //我的文章
    myArti: [
      {
        title: "你們的劍龍會有這種BUG嗎？",
        time:"2021-06-02",
        read:"857",
        repo:"6",
      },
      {
        title: "你們的劍龍會有這種BUG嗎？",
        time:"2021-06-02",
        read:"857",
        repo:"8",
      },
      {
        title: "你們的劍龍會有這種BUG嗎？",
        time:"2091-06-02",
        read:"857",
        repo:"8",
    },   {
      title: "你們的劍龍會有這種BUG嗎？",
      time:"2091-06-02",
      read:"857",
      repo:"8",
  },
    ],
    //文章收藏
    arti_lub: [
      {
        title: "三角龍出去玩",
        time:"2021-06-02",
        read:"857",
        repo:"6",
      },
      {
        title: "三角龍出去玩",
        time:"2021-06-02",
        read:"857",
        repo:"8",
      },
      {
        title: "三角龍出去玩",
        time:"2091-06-02",
        read:"857",
        repo:"8",
    },   {
      title: "三角龍出去玩",
      time:"2091-06-02",
      read:"857",
      repo:"8",
      }, {
      title: "三角龍出去玩",
      time:"2091-06-02",
      read:"857",
      repo:"8",
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
    // 我的
    getSmallList() {
      return this.myArti.filter((item, index) => {
        return (
          index < this.currentPage * maxItemPerPage &&
          index >= (this.currentPage - 1) * maxItemPerPage
        );
      });
    },
    //別人的
    getSmallList_lub() {
      return this.arti_lub.filter((item, index) => {
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
      return Math.ceil(this.myArti.length / maxItemPerPage);
    },
    getLastPage_lub() {
      return Math.ceil(this.arti_lub.length / maxItemPerPage);
    }
  }

  }); 




//===================================================
let card_btn = document.getElementById("arti_btn");
card_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_my").classList.add("none");

  document.getElementById("dinoCon_for").classList.remove("none");

  document.getElementById("arti_btn").classList.add("active");
  document.getElementById("myArti_btn").classList.remove("active");
})

//-----------------------------------
let myCard_btn = document.getElementById("myArti_btn");
myCard_btn.addEventListener("click", function () {
  
  document.getElementById("dinoCon_for").classList.add("none");

  document.getElementById("dinoCon_my").classList.remove("none");
  
  
  document.getElementById("myArti_btn").classList.add("active");
  document.getElementById("arti_btn").classList.remove("active");
})