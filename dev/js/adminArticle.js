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
      },
      

      postArticle(no,sta){
        let xhr = new XMLHttpRequest();
        let sel =this
        let bo = "art_no="+ no +"&art_status="+sta
        xhr.onload = function(){
          if(xhr.status == 200){
            console.log(xhr.responseText);
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("post", "./php/adminStatus.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        console.log(xhr);
        xhr.send(bo);
      },
    },
    mounted() {
      this.getArticle()
    }
  })