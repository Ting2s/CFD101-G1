
let data = {
    artRows:[],
    msgRows:[],
    showModal: false,
    artitem:[],
    msgitem:[],
    url:"",
    cat:"",
    cate:""
  }

  let vm = new Vue({
    el: '#app',
    data : data,
    methods: {
      geturl(){
        this.url = window.location.search.split("=")[1]
      },

      getArticle(){
        let xhr = new XMLHttpRequest();
        let self =this
        xhr.onload = function(){
          if(xhr.status == 200){
            self.artRows = JSON.parse(xhr.responseText);
            self.artitem = self.artRows.filter(item => item.art_no === self.url ) 
            self.cat = self.artitem[0].art_category.substring(0, 2);
            self.cate = self.artitem[0].art_category.substring(2, 4);
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/getArticle.php", true);
        console.log(xhr);
        xhr.send(null);
      },

      getMessage(){
        let xhr = new XMLHttpRequest();
        let self =this
        xhr.onload = function(){
          if(xhr.status == 200){
            self.msgRows = JSON.parse(xhr.responseText);
            self.msgitem = self.msgRows.filter(item => item.art_no === self.url ) 
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/dinoMessage.php", true);
        console.log(xhr);
        xhr.send(null);
      }
    },
    mounted() {
      this.geturl()
      this.getArticle()
      this.getMessage()
    }
})