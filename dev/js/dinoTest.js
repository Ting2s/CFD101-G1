
new Vue({

  el: ('#app'),
  data: {
    answers:
      [{
        name: "A",
        option: ""
      }
      ,{name:"B",option:""}
      ,{name:"C",option:""}
      ,{name:"D",option:""}
      ],
    //題庫
    questions:[],
//============== 
    isClick:false,   
//==============   
    isRight: true,
    isShow: false,
//==============
    isStart: false,
    isGame: true,
    isScore: true,
    isWrapper:false,
//分數===========
    point: 0,
    allPoint: 0,
//評論===========    
    comment_A: "你真是個天才！",
    comment_B: "你真厲害！",
    comment_C: "再加油！",
//對錯===========
    rightImg: "images/dinoTest/pic/right.png",
    wrongImg: "images/dinoTest/pic/x.png"
  },
  computed: {


    choose(i) {

      this.isShow = true;
      this.isClick = true;
    //顯示對錯
      if (this.clicked = true &&
        this.questions[i].target.value == this.questions[i].quiz_a) {
        this.wrongImg = false;
        this.rightImg = true;
      } else {
        this.wrongImg = true;
        this.rightImg = false;
      }
    },
    //當選取的按鈕和quiz_a相同時->加一分
    rightPoint() {
      if (this.clicked = true &&
        this.questions[i].target.value == this.questions[i].quiz_a) {
        return this.point = 1;
      } else {
        return this.point = 0;
      }
    },

    //對錯計算
    finalScore() {
      for (let i = 1; i<=7; i++) {
        return this.allPoint += this.rightPoint();
      };
    },
  },

  methods: {
    //遊戲開始*
    game() {
      this.isStart = true;
      this.isGame = false;
      this.questions[0].status = 1;
    },

    //轉換選項
    options(i) {
      //this.answers[i].option = `${this.questions[i]}` + `.quiz_${i + 1}`;
      
    
    },


    //撈資料庫*
    myQuiz(){
      const xhr = new XMLHttpRequest();
      const my =this
      xhr.onload = function(){
        if (xhr.status == 200) {
      my.questions = JSON.parse(xhr.responseText);
        }else{
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/getQuestion.php", true);
      xhr.send(null);
    },
  
    //遊玩結果讀入資料庫
    readInRank() {
      const xhr = new XMLHttpRequest();
      xhr.onload = function(){
        if (xhr.status == 200) {
          //存進後台
        }else{
          alert(xhr.status);
        }
      }
      xhr.open("get", "./php/insertRank.php", true);
      xhr.send(null);
    },

    //切換下頁鍵
    nextTitle(i) {
      console.log(this.questions[6].status);
      if (this.questions[i].status < this.questions[i + 1].status) {
        this.isClick = false;
        this.isShow = false;
        this.questions[i].status = 2;
        this.questions[i + 1].status = 1;
      }
    else if(this.questions[i].status > this.questions[i + 1].status) {
    this.isClick = false;
    this.isShow = false;
    this.questions[i + 1].status = 2;
    this.questions[i + 2].status = 1;
    }
    //切換成分數頁(scoreBoard) 
      else if (this.questions[6].status ==1) { 
        this.isGame = true;
        this.isScore = false;
        this.isWrapper = true;
    }else{} 


    },


    //重新開始*
    restart() {
      this.isClick = false;
      this.isShow = false;

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
    comment() {
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
