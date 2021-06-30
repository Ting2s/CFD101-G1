
    function getId(id){
      return document.getElementById(id);
    }  
    function showImg(e){
      getId("showHat").src = e.target.src;
      getId("showHat").style.display="";      
    }
    function showCart(){
      alert("購物系統維修中");
    }


    function prePageshowImg(){
      document.getElementById("btnCard-2").classList.remove("none");
      document.getElementById("btnCard-1").classList.add("none");
      // console.log(nextPage);
    }
    function nextPageshowImg(){
      document.getElementById("btnCard-2").classList.add("none");
      document.getElementById("btnCard-1").classList.remove("none");
      // console.log(prePage);
    }
    

    function init(){
      // let imgs =  document.getElementsByClassName("imgClass");
      let imgs =  document.querySelectorAll('.imgClass');
      console.log(imgs);
      for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showImg;
      }

      // cart
      let cart = document.getElementsByClassName('cart')[0];
      cart.onclick = showCart;

      // change page

      let prePage  = document.getElementById("prePage");
      let nextPage = document.getElementById("nextPage");
      prePage.onclick = prePageshowImg;
      nextPage.onclick = nextPageshowImg;
    }

    window.onload = init;

          // let nextPage = document.getElementById("nextPage");
          // nextPage.addEventListener("click", function () {

          //     document.getElementById("btnCard-2").classList.remove("none");
          //     document.getElementById("btnCard-1").classList.add("none");
          //     console.log(nextPage);
          // })


          // let prePage  = document.getElementById("prePage");
          //     prePage.addEventListener("click", function () {

          //         document.getElementById("btnCard-2").classList.add("none");
          //         document.getElementById("btnCard-1").classList.remove("none");
          //         console.log(prePage);
          //     })




