let data = {
    favRows:[],
  }
  let vm = new Vue({
    el: "#app",
    data: data,
    methods: {
      getcard_favorite(){
        let xhr = new XMLHttpRequest();
        let self =this
        xhr.onload = function(){
          if(xhr.status == 200){
            self.favRows = JSON.parse(xhr.responseText);
          }else{
            alert(xhr.status);
          }
        }
        xhr.open("get", "./php/card_favorite.php", true);
        console.log(xhr);
        xhr.send(null);
      },

      like(e){
         if(e.target.className == 'fas fa-heart'){
            e.target.className = 'far fa-heart';
         }else{
            e.target.className = 'fas fa-heart';
         }


        //  $.ajax({
        //      url:"./php/card_favorite.php",
        //      data: ,
        //      success(res){
        //          console.log(res)
        //      },

        //  });
        
      },
    },
    mounted() {
      this.getcard_favorite()
    },
  
  })
 
//--------------
// $(function () {
    
//     $('.image').on('click', function () {

//         var src = $(this).attr('src');
//         $('.imgPreview img').attr('src', src);
//         $('.imgPreview').show()
//     });

//     $('.imgPreview').on('click', function () {

//         $('.imgPreview').hide()
//     });
// })
  
//-----------------------
// if(傳入class有fas 收欌->不收欌)
    // {
    //    ajax SQL Delete 收藏項, php 傳入 card_no
    //    js 移除 fas class
    // }else{ 不收欌->收欌
    //     ajax SQL Insert 收藏項
    //     js 加入 fas class
    //}

//-----------------------
