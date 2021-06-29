
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

    function init(){
      // let imgs =  document.getElementsByClassName("imgClass");
      let imgs =  document.querySelectorAll('.imgClass');
      console.log(imgs);
      for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showImg;
      }
      let cart = document.getElementsByClassName('cart')[0];
      cart.onclick = showCart;
    }

    window.onload = init;

    // let card_btn = document.getElementById("card_btn");
    // card_btn.addEventListener("click", function () {
      
    //   document.getElementById("myCard").classList.add("none");
    
    //   document.getElementById("card").classList.remove("none");