
new Vue({

  el: ('#app'),
  data: {
    //題庫
    questions:[],
//============== 
    isClick:'clicked',
//==============   

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
    wrongImg: "images/dinoTest/pic/x.png",
//對錯===========
    isRight_1: false,
    isWrong_1: false,
    isRight_2: false,
    isWrong_2: false,
    isRight_3: false,
    isWrong_3: false,
    isRight_4: false,
    isWrong_4: false,
//點擊===========
    choose_1: false,
    choose_2: false,
    choose_3: false,
    choose_4:false,
  },

  methods: {
    init() {
        this.isRight_1 = false;
        this.isWrong_1 = false;
        this.isRight_2 = false;
        this.isWrong_2 = false;
        this.isRight_3 = false;
        this.isWrong_3 = false;
        this.isRight_4 = false;
        this.isWrong_4 = false;
    },
    //判定
    see_1(i) {
      this.init();
      this.isShow = true;
    //亮燈
      this.choose_1 = true;
    //顯示對錯
      if (this.questions[i].quiz_opt1 == this.questions[i].quiz_a) {
        // console.log(i);
        this.isRight_1 = true;
        this.isWrong_2 = true;
        this.isWrong_3 = true;
        this.isWrong_4 = true;
      }
      // } else if (this.questions[i].quiz_opt2 == this.questions[i].quiz_a) {
      //   this.isRight_2 = true;
      //   this.isWrong_1 = true;
      //   this.isWrong_3 = true;
      //   this.isWrong_4 = true;
      // } else if (this.questions[i].quiz_opt3 == this.questions[i].quiz_a) {
      //   this.isRight_3 = true;
      //   this.isWrong_1 = true;
      //   this.isWrong_2 = true;
      //   this.isWrong_4 = true;
      // } else if (this.questions[i].quiz_opt4 == this.questions[i].quiz_a) {
      //   this.isRight_4 = true;
      //   this.isWrong_1 = true;
      //   this.isWrong_2 = true;
      //   this.isWrong_3 = true;
      // }
    },

    see_2(i) {
      this.init();
      this.isShow = true;
    //亮燈
      this.choose_2 = true;
    //顯示對錯
    if (this.questions[i].quiz_opt2 == this.questions[i].quiz_a) {
      this.isRight_2 = true;
      this.isWrong_1 = true;
      this.isWrong_3 = true;
      this.isWrong_4 = true;
    } else {
      this.isWrong_2 = true;
    }
    },

    see_3(i) {
      this.init();
      this.isShow = true;
    //亮燈
      this.choose_3 = true;
    //顯示對錯
    if (this.questions[i].quiz_opt3 == this.questions[i].quiz_a) {
      this.isRight_3 = true;
      this.isWrong_1 = true;
      this.isWrong_2 = true;
      this.isWrong_4 = true;
    } else {
      this.isWrong_3 = true;
    }
    },

    see_4(i) {
    this.init();
    this.isShow = true;
    //亮燈
    this.choose_4 = true;
    //顯示對錯
    if (this.questions[i].quiz_opt4 == this.questions[i].quiz_a) {
      this.isRight_4 = true;
      this.isWrong_1 = true;
      this.isWrong_2 = true;
      this.isWrong_3 = true;
    } else {
      this.isWrong_4 = true;
    }
    },
     //當選取的按鈕和quiz_a相同時->加一分
    rightPoint(i) {
      if (this.choose_1 == true &&
        this.questions[i].quiz_opt1 == this.questions[i].quiz_a) {
        this.point = 1;
      } else {
        this.point = 0;
      }

      if (this.choose_2 == true &&
        this.questions[i].quiz_opt2 == this.questions[i].quiz_a) {
        this.point = 1;
      } else {
        this.point = 0;
      }

      if (this.choose_3 == true &&
        this.questions[i].quiz_opt3 == this.questions[i].quiz_a) {
        this.point = 1;
      } else {
        this.point = 0;
      }

      if (this.choose_4 == true &&
        this.questions[i].quiz_opt4 == this.questions[i].quiz_a) {
        this.point = 1;
      } else {
        this.point = 0;
      }
    },
    //遊戲開始*
    game() {
      this.isStart = true;
      this.isGame = false;
      this.isShow = false;
      this.questions[0].status = 1;
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
    //切換下頁鍵*
    nextTitle(i) {
      
      if (this.questions[i].status < this.questions[i + 1].status) {
        this.choose_1 = false;
        this.choose_2 = false;
        this.choose_3 = false;
        this.choose_4 = false;
        this.isShow = false;
        
        this.questions[i].status = 2;
        this.questions[i + 1].status = 1;
      }
    else if(this.questions[i].status > this.questions[i + 1].status) {
        this.choose_1 = false;
        this.choose_2 = false;
        this.choose_3 = false;
        this.choose_4 = false;
        this.isShow = false;
        
        this.questions[i + 1].status = 2;
        this.questions[i + 2].status = 1;
    }
    //切換成分數頁(scoreBoard) 
    if (this.questions[7].status ==1) { 
        this.isGame = true;
        this.isScore = false;
        this.isWrapper = true;
    }else{} 

    // if(this.isClick_1 ==false && this.isClick_2 ==false &&
    //   this.isClick_3 ==false && this.isClick_4 == false) {
    //   alert("嘿！你還有題目沒答喔！");
    //   return;
      
    //   }
    },


    //重新開始*
    restart() {
      this.choose_1 = false;
      this.choose_2 = false;
      this.choose_3 = false;
      this.choose_4 = false;
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

      this.choose_1 = false;
      this.choose_2 = false;
      this.choose_3 = false;
      this.choose_4 = false;

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

  computed: {
    //對錯計算
      finalScore() {
        for (let i = 1; i<=7; i++) {
          return this.allPoint += this.rightPoint(index);
        };
      },
    },
  
  
  
  mounted() {
    this.myQuiz();
  }
})

//==========================================
function $id(id) {
  return document.getElementById(id);
}
function insertRank() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
    //存進後台
    }else {
    alert(xhr.status);
  }
  }

  xhr.open("post", "./php/insertRank.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  
  let data_info = `score=${$id("finalScore").value}`;
  xhr.send(data_info);
}


function init() {
  insertRank();
}; 
window.onload = init;