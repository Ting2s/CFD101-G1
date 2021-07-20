let data = {
    artRows:[],
  }
  let vm = new Vue({
    el: "#app",
    data: data,
    methods: {
      getArticle(){
        let xhr = new XMLHttpRequest();
        let sel =this
        xhr.onload = function(){
          if(xhr.status == 200){
            sel.artRows = JSON.parse(xhr.responseText);
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/getArticle.php", true);
        console.log(xhr);
        xhr.send(null);
      }
    },
    mounted() {
      this.getArticle()
    }
  })