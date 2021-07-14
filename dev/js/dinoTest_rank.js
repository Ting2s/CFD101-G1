new Vue({

  el: ("#rank"),
  data:{
    rank_rows: [
    ],
    siliBall:false,
  },

  methods:{
  //拉資料庫
  myRank(){
    const xhr = new XMLHttpRequest();
    const my =this
    xhr.onload = function(){
      if (xhr.status == 200) {
    my.rank_rows = JSON.parse(xhr.responseText);
      }else{
        alert(xhr.status);
      }
    }
    xhr.open("get", "./php/getRank.php", true);
    xhr.send(null);
    }
  },
  sili() {
      if (this.rank_rows[3] |this.rank_rows[4]) {
        this.siliBall = true;
      }
  },
  
  mounted(){
    this.myRank();
  }
})


