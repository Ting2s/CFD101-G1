let data = {
    artRows:[],
    select: {
      type: '全部',
      title: ''
    },
    types: ['全部', '恐龍創作', '恐龍分享', '恐龍知識']
  }
  let vm = new Vue({
    el: "#app",
    data: data,
    computed: {
      typeMenu() {
        if (this.select.type === '全部') {
          return this.artRows
        } else {
          return this.artRows.filter(item => {
           return item.art_category ===  this.select.type
          })
        }
      }
    },
    methods: {
      sel(item) {
        this.select.type = item;
      },
      getArticle(){
        let xhr = new XMLHttpRequest();
        let self =this
        xhr.onload = function(){
          if(xhr.status == 200){
            self.artRows = JSON.parse(xhr.responseText);
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/gcarticle.php", true);
        console.log(xhr);
        xhr.send(null);
      }
    },
    mounted() {
      this.getArticle()
    }
  })

  // function getArticle(){
  //   let xhr = new XMLHttpRequest();
  //   xhr.onload = function(){
  //     if(xhr.status == 200){
  //       app.artRows = JSON.parse(xhr.responseText);
  //     }else{
  //       alert(xhr.status);
  //     }
  //   }
  //   xhr.open("get", "../php/getArticle.php", true);
  //   xhr.send(null);
  // }

  // getArticle();