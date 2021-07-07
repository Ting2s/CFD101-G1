//  :class="{'show':isOK,'none':isNO}"
// let vue=new Vue({
//   el:document.getElementById('whiteBoard'),
//   data: {
//     isOK:true,
//     isNO:false
//   },
//   computed: {
//     startBtn() {
//         this.isOK = false,
//         this.isNO = true
//     }
//   }
// })
//判決對錯

//==================================================
let judge = new Vue({

  el:('#app'),
  data: {
    questions: [
      { q:"全世界最重的恐龍大約重達幾公噸？"}
    
    ],
    isRight: true,
    isShow: false,
    isActive: false,
    //分數===========
    
    score: "7",
    comment_A: "你真是個天才！",
    comment_B: "你真厲害！",
    comment_C: "再加油！",
  },
  methods: {
    choose: function (index) {
      this.isShow = true;
      this.isActive=true;
    },

    comment: function () {
      if (this.score == 7) {
        return this.comment_A;
      } else if (this.score >= 4 && this.score<7) {
        return this.comment_B;
      } else {
        return this.comment_C;
      }
    }

  }
})






//==============================================
let start_btn = document.getElementById("startBtn");
start_btn.addEventListener("click", function (e) {

  document.getElementById("testContent").classList.add("none");
  document.getElementById("testContent_Q").classList.remove("none");
})


let nextArrow = document.getElementById("nextArrow");
nextArrow.addEventListener("click", function (e) {

  document.getElementById("testContent_Q").classList.add("none");
  document.getElementById("scoreBoard").classList.remove("none");
  document.getElementById("whiteBoard").classList.add("showScore");
  document.getElementById("whiteBoard").classList.remove("whiteBoard");
})

let restart = document.getElementById("restart");
restart.addEventListener("click", function (e) {

  document.getElementById("testContent_Q").classList.remove("none");
  document.getElementById("scoreBoard").classList.add("none");
  document.getElementById("whiteBoard").classList.remove("showScore");
  document.getElementById("whiteBoard").classList.add("whiteBoard");
})

//==============================================