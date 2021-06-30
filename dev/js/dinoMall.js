
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
      getId("btnCard-2").classList.remove("none");
      getId("btnCard-1").classList.add("none");
      getId("showName").innerText = "紋身貼紙";
      // console.log(nextPage);
    }
    function nextPageshowImg(){
      getId("btnCard-2").classList.add("none");
      getId("btnCard-1").classList.remove("none");
      getId("showName").innerText = "帽子";
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

      // switch page
      let prePage  = document.getElementById("prePage");
      let nextPage = document.getElementById("nextPage");
      prePage.onclick = prePageshowImg;
      nextPage.onclick = nextPageshowImg;
    }

    window.onload = init;





