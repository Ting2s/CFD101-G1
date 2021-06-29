
    function getId(id){
      return document.getElementById(id);
    }  
    function showImg(e){
      getId("showHat").src = e.target.src;
      getId("showHat").style.display="";      
    }

    function init(){
      let imgs =  document.getElementsByClassName("imgClass");
      for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showImg;
      }
    }

    window.onload = init;

  