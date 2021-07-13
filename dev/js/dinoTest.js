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
      {
        name: "A",
        option:""
      },
      {
        name: "B",
        option:""  },
      {
        name: "C",
        option:""  },
      {
        name: "D",
        option:""  },
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
        A: "s",
        B: "d",
        C: "e",
        D: "c",
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
    quest_rows:[],
    
    isRight: true,
    isShow: false,
    //分數===========
    isStart: false,
    isGame: true,
    isScore: true,
    isWrapper:false,

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


    choose: function (i) {
      this.isShow = true;
    // 決定是否正確
      if (this.isActive = true &&
        this.questions[i].target.value == this.questions[i].ans) {
        this.wrongImg = false;
        this.rightImg = true;
      } else {
        this.wrongImg = true;
        this.rightImg = false;
      }
    },
    //當選取的選項和ans一樣時 加一分
    rightPoint() {
      if (this.isActive = true &&
        this.questions[i].target.value == this.questions[i].ans) {
        return this.point = 1;
      } else {
        return this.point = 0;
      }
    },

    //將七題的對錯計算
    finalScore() {
      for (let i = 1; i<=7; i++) {
        return allPoint += rightPoint();
      };
    },
  },

  methods: {
    //遊戲開始*
    game: function () {
      this.isStart = true;
      this.isGame = false;
    },

    //轉換
    options(i) {

      if (this.answers.name="A") {
        return this.questions[i].A;
      };
      if(this.answers.name="B") {
        return this.questions[i].B;
      };
      if(this.answers.name="C") {
        return this.questions[i].C;
      };
      if(this.answers.name="D") {
        return this.questions[i].D;
      };
      
    },
    
    //撈資料庫
    myQuiz(){
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
        if(xhr.status == 200){
          this.quest_rows = JSON.parse(xhr.responseText);
        }else{
          // alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getQuestion.php", true);
      console.log(xhr);
      xhr.send(null);
    },

    //20題抽7
    chooseQA() {
      for (let i = 0; i < this.quest_rows.length; i++) {
        let choose = Math.floor(Math.random() * 7);
        choose = this.questions;
      }
    },
  
    //切換下頁鍵*
    nextTitle: function (i) {
      
      if (this.questions[i].status < this.questions[i + 1].status) {
        this.questions[i].status = 2;
        this.questions[i + 1].status = 1;

      } else if (this.questions[i].status > this.questions[i + 1].status) {
        this.questions[i + 1].status = 2;
        this.questions[i + 2].status = 1;

    //切換分數
      } else if (this.questions[6].status = 1) {
        this.isGame = true;
        this.isScore = false;
        this.isWrapper = true;
    }
    },
    //進入公布分數
    // inScore(){
    //   if (this.questions[6].status = 1) {
    //     this.isGame = true;
    //     this.isScore = false;
    //     this.isWrapper = true;
    // }},

    //重新開始*
    restart: function () {
      // console.log(this.questions[0].status);

      this.questions[0].status = 1
      for (let i = 1; i < this.questions.length; i++) {
        this.questions[i].status = 2
      }
    },
    //再玩一次*
    playAgain() {
      this.isScore = true;
      this.isGame = false;
      this.isWrapper = false;

      this.questions[0].status = 1
      for (let i = 1; i < this.questions.length; i++) {
        this.questions[i].status = 2
      }
    },
    
    //評論*
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

  mounted() {
    this.myQuiz();
  }
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