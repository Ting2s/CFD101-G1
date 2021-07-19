
let data = {
    artRows:[],
    msgRows:[],
    showModal: false,
    artitem:[],
    msgitem:[],
    url:"",
    cat:"",
    cate:"",
    input: "",
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
      },

      send_data() {
        var form = $('form')[0];
        var formData = new FormData();
        formData.append("text", this.input)



        $.ajax({
            url: './php/postmessage.php', 
            method: 'POST',               
            dataType: 'text',             
            contentType: false,
            cache: false,
            processData: false,
            data: formData,  
            success: function (res) {       
                console.log('成功');
                console.log(res);
            },
            error: function (res) {
                console.log('失敗');
                console.log(res);
            },
        });
      },
    },
    mounted() {
      this.geturl()
      this.getArticle()
      this.getMessage()
      this.send_data()
    }
})