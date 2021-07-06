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

  el:('#testContent_Q'),
  data: {
    question:"全世界最重的恐龍大約重達幾公噸？",
    isRight: true,
    isShow: false,
    isActive: false,
  },
  methods: {
    choose: function (index) {
      this.isShow = true;
      this.isActive=true;
    },

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