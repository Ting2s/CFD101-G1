    function getId(id){
      return document.getElementById(id);
    }  

    function showImg(e){
      getId("showHat").src = e.target.src;
      getId("showHat").style.display="";
      
      Draggable.create("#showHat", {
        type:"x,y", // "rotation"
        inertia:true,
        cursor:'pointer',
        dragResistance:0.2,
        edgeResistance:1,
        lockAxis:false,
        bounds: document.getElementsByClassName("cardLeft"),
        // bounds: '#abc',
        throwProps:true,
        onClick:function() {
          console.log("clicked");
        },
        onDragEnd:function(e){
          if(this.hitTest('#showImg_Mall','10%')){  // area %
            TweenMax.fromTo('#showHat',3,{
              scale:2,rotationY:0},{
              scale:1,ease:Bounce.easeOut,rotationY:360
            },
            )
          }
        }
      }); // Draggable.create()
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





