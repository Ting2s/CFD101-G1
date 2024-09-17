let pageNo = 0;
let vm = new Vue({
    el: "#app",
    data: {
      favRows:[]
    },
    methods: {
      getcard_favorite(){
        pageNo ++;
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
        console.log("=======",window.innerWidth);
        let records;
        if(window.innerWidth>812){
          records = 8;
        }else{
          records = 4;
        }
        xhr.open("get", "./php/getCard.php?pageNo="+pageNo+"&records="+records, true);
        //xhr.open("get", "./php/card_favorite.php", true);
        //xhr.open("get", "./php/getCard.php?pageNo="+pageNo, true);
        console.log(xhr);
        xhr.send(null);
      },
      getcard_favorite2(){
        if (pageNo == 1) return;
        pageNo --;
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
        console.log("=======",window.innerWidth);
        let records;
        if(window.innerWidth>812){
          records = 8;
        }else{
          records = 4;
        }
        xhr.open("get", "./php/getCard.php?pageNo="+pageNo+"&records="+records, true);

        //xhr.open("get", "./php/card_favorite.php", true);
        //xhr.open("get", "./php/getCard.php?pageNo="+pageNo, true);
        console.log(xhr);
        xhr.send(null);
      },

      like(objData, index){
        console.log('=========0')
        if (member.mem_id == undefined){
          window.alert("尚未登入，請登入");
          console.log('=========1')
          return;
        }else{
          console.log('=========2')
        }
        console.log('進入',objData);
        console.log('我按到第幾個', index);
        //console.log(this.$refs);
        let data=objData
        let heart=document.getElementById(`icon-${index}`)
         if(heart.className == 'fas fa-heart'){
            heart.className = 'far fa-heart';
            data.like="unlike";
         }else{
            heart.className = 'fas fa-heart';
            data.like="like";
         }
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
 
    
      mounted() {
        this.getcard_favorite();
        document.getElementById("previousPageButton").onclick = this.getcard_favorite2;
        document.getElementById("nextPageButton").onclick = this.getcard_favorite;
      },

    });

  
  $(document).ready(function(){
    
    $(function(){
      $('.pic').on('click',function(){
        var src = $(this).attr('src');
        $('.imgPreview img').attr('src',src);
        $('.imgPreview').show()
      });
      $('.imgPreview').on('click',function(){
        $('.imgPreview').hide()
      });
    });

})