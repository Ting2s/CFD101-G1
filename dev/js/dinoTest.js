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
new Vue({

  el: ('#app'),
  data: {
    answers: [
      { name: "A" },
      { name: "B" },
      { name: "C" },
      { name: "D" },
    ],
    questions: [
      {
        q: "全世界最重的恐龍大約重達幾公噸？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "1",
        ans: "70噸",
      },
      {
        q: "第一次在中國發現的大型暴龍是？",
        A: "中國龍",
        B: "水果龍",
        C: "海里龍",
        D: "寶貝龍",
        status: "2",
        ans: "中國龍",
      },
      {
        q: "最小的恐龍是？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "2",
        ans: "70噸",
      },
      {
        q: "鴨嘴龍會遊泳嗎？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "2",
        ans: "70噸",
      },
      {
        q: "全世界最重的恐龍大約重達幾公噸？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "2",
        ans: "70噸",
      },
      {
        q: "全世界最重的恐龍大約重達幾公噸？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "2",
        ans: "70噸",
      },
      {
        q: "全世界最重的恐龍大約重達幾公噸？",
        A: "30噸",
        B: "50噸",
        C: "70噸",
        D: "100噸",
        status: "2",
        ans: "70噸",
      }
    ],
    choose_q: [],
    
    isRight: true,
    isShow: false,
    isActive: false,
    //分數===========
    isStart: false,
    isGame: true,
    isScore: true,
    isBoard: false,
    isWhite: true,

    point: 0,
    allPoint: 0,
    
    comment_A: "你真是個天才！",
    comment_B: "你真厲害！",
    comment_C: "再加油！",

    //============
    rightImg: "images/dinoTest/pic/right.png",
    wrongImg: "images/dinoTest/pic/x.png"
  },
  computed: {
    //當選擇時按鈕變色+秀出正確錯誤
    choose: function () {
      this.isShow = true;
      this.isActive = true;
    },
    // 決定是否正確
    judge: function (i) {
      if (this.isActive = true,
        this.questions[i].value = this.questions[i].ans) {
        this.wrongImg = false;
        this.rightImg = true;
      }
    },
    //當選取的選項和ans一樣時 加一分
    // rightPoint() {
    //   // if () {
    //   //   return this.point = 1
    //   // }
    // },
    //將七題的對錯計算
    finalScore() {

      for (let i = 1; i<=7; i++) {
        return allPoint += rightPoint();
      };
    },
  },
  methods: {
    //切換成遊戲開始ok
    game: function () {
      this.isStart = true;
      this.isGame = false;
    },

    //20題抽7
    chooseQA() {
      for (let i = 0; i < this.questions.length; i++) {
        let choose = Math.floor(Math.random() * 7);
        choose = this.choose_q;
      }
    },
  
    //切換下頁鍵ok
    nextTitle: function (i) {
      console.log(this.questions[6].status);
      
      if (this.questions[i].status < this.questions[i + 1].status) {
        this.questions[i].status = 2;
        this.questions[i + 1].status = 1;

      } else {
        this.questions[i + 1].status = 2;
        this.questions[i + 2].status = 1;
      }

      //進入公布分數（直接跳轉??
      if (this.questions[6].status = 1) {
        console.log("hi");
        this.isGame = true;
        this.isScore = false;
        this.isBoard = true;
      }
    },

    //重新開始ok
    restart: function () {
      // console.log(this.questions[0].status);

      this.questions[0].status = 1
      for (let i = 1; i < this.questions.length; i++) {
        this.questions[i].status = 2
      }
    },
    //再玩一次ok
    playAgain() {
      this.isScore = true;
      this.isGame = false;

      this.questions[0].status = 1
      for (let i = 1; i < this.questions.length; i++) {
        this.questions[i].status = 2
      }
    },
    
    //評論ok
    comment: function () {
      if (this.score == 7) {
        return this.comment_A;
      } else if (this.score >= 4 && this.score < 7) {
        return this.comment_B;
      } else {
        return this.comment_C;
      }
    }
  },
})



//==============================================
function Id(id) {
  return document.getElementById(id);
}
//==============================================
// let start_btn =Id("startBtn");
// start_btn.addEventListener("click", function (e) {

//   Id("testContent").classList.add("none");
//   Id("testContent_Q").classList.remove("none");
// })


// let toScore = Id("nextArrow");
// toScore.addEventListener("click", function (e) {

//   Id("testContent_Q").classList.add("none");
//   Id("scoreBoard").classList.remove("none");
//   Id("whiteBoard").classList.add("showScore");
//   Id("whiteBoard").classList.remove("whiteBoard");
// })

// let restart = Id("restart");
// restart.addEventListener("click", function (e) {

//   Id("testContent_Q").classList.remove("none");
//   Id("scoreBoard").classList.add("none");
//   Id("whiteBoard").classList.remove("showScore");
//   Id("whiteBoard").classList.add("whiteBoard");
// })

//==============================================