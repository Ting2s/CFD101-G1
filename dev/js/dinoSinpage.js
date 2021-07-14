
let data = {
    artRows:[],
    showModal: false,
    artitem:[],
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
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/getArticle.php", true);
        console.log(xhr);
        xhr.send(null);
        this.cat = self.artitem[0].art_category.subString(0, 2);
        this.cate = self.artitem[0].art_category.subString(2, 4);
      },
    },
    mounted() {
      this.geturl()
      this.getArticle()
    }
})