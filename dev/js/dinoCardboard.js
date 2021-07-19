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
            //let xhr2 = new XMLHttpRequest();
            //xhr2.open("get","getMyFavorie.php",true);
          }else{
            alert(xhr.status);
          }
        }
        //xhr.open("get", "./php/card_favorite.php", true);
        xhr.open("get", "./php/getCard.php", true);
        console.log(xhr);
        xhr.send(null);
      },

      like(objData, index){
        console.log('進入',objData);
        console.log('我按到第幾個', index);
        //console.log(this.$refs);
        let data=objData
        //  if(e.target.className == 'fas fa-heart'){
        //     e.target.className = 'far fa-heart';
        //  }else{
        //     e.target.className = 'fas fa-heart';
        //  }
        let currentIcon = document.getElementById('icon-0')
        console.log(currentIcon);

         $.ajax({
             url:"./php/card_favorite.php",
             data,
             type:'POST',
             success(res){
                console.log(res)
             },
             false(res){
               console.log(res)
             }
         });
        
      },
    },
    // computed:{
    //   likeOrNot(){
    //     self.favRows
    //     for(let i in this.favRows){
    //       if(this.favRows[i].mem_no == 1){

    //       }
    //     }
    //   }
    // }
    mounted() {
      //this.getcard_favorite()
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
