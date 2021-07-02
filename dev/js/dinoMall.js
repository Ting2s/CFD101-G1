    function getId(id){
      return document.getElementById(id);
    }  

    function showImgHat(e){
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

    function showImgSticks(e){
      getId("showSticker").src = e.target.src;
      getId("showSticker").style.display="";
      Draggable.create("#showSticker", {
        type:"x,y", 
        inertia:true,
        cursor:'pointer',
        dragResistance:0.2,
        edgeResistance:1,
        lockAxis:false,
        bounds: document.getElementsByClassName("cardLeft"),
        throwProps:true,
        onClick:function() {
          console.log("clicked");
        },
        onDragEnd:function(e){
          if(this.hitTest('#showImg_Mall','10%')){  // area %
            TweenMax.fromTo('#showSticker',3,{
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

    //   選擇恐龍 
    function showImgChange(e){
      getId("showImg_Mall").src = e.target.src;
    }    

    // openModalBox A / C
    function openModalBoxA(){
      getId("bg-modal-a").style.display='flex';
      // let imgsChange =  document.querySelectorAll('.changeImg');
      let imgsChange =  document.getElementsByClassName("changeImg");
      console.log(imgsChange);
      for(let i=0; i<imgsChange.length; i++){
      imgsChange[i].onclick = showImgChange;
        }
      }
    
    function openModalBoxC(){
      getId("bg-modal").style.display='flex';
    }

    // closeModalBox A / C
    function closeModalBoxA(){
      getId("bg-modal-a").style.display='none';
    }
    function closeModalBoxC(){
      getId("bg-modal").style.display='none';
    }

    // 脫光光 B
    function closeModalBoxB(){
      getId("showHat").style.display='none';
      getId("showSticker").style.display='none';

    }

    

    function init(){
      // let imgs =  document.getElementsByClassName("imgClass");
      let imgs =  document.querySelectorAll('.imgClassHat');
                  console.log(imgs);
      for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showImgHat;
      }


      let imgsSticks =  document.querySelectorAll('.imgSticks');
                  console.log(imgsSticks);
      for(let i=0; i<imgsSticks.length; i++){
        imgsSticks[i].onclick = showImgSticks;
      }



      // cart
      let cart = document.getElementsByClassName('cart')[0];
      cart.onclick = showCart;

      // switch page
      let prePage  = document.getElementById("prePage");
      let nextPage = document.getElementById("nextPage");
      prePage.onclick = prePageshowImg;
      nextPage.onclick = nextPageshowImg;


      // 選擇恐龍
      let btnSelect_a = getId("btnSelect_a"); 
      // console.log(btnSelect_a);
      btnSelect_a.onclick = openModalBoxA;
      let  btnCloseA= getId("close-a"); 
      btnCloseA.onclick = closeModalBoxA;
     
      // 脫光光
      let btnSelect_b = getId("btnSelect_b"); 
      btnSelect_b.onclick = closeModalBoxB;

      // 儲存造型 modalBox
      let btnSelect_c = getId("btnSelect_c"); 
      btnSelect_c.onclick = openModalBoxC;
      let  btnClose= getId("close"); 
      btnClose.onclick = closeModalBoxC;


    }

    window.onload = init;





