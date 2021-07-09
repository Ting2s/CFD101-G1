function getId(id){
  return document.getElementById(id);
};  

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
};

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

};

function prePageshowImg(){
  getId("btnCard-2").classList.remove("none");
  getId("btnCard-1").classList.add("none");
  getId("showName").innerText = "紋身貼紙";
  // console.log(nextPage);
};
function nextPageshowImg(){
  getId("btnCard-2").classList.add("none");
  getId("btnCard-1").classList.remove("none");
  getId("showName").innerText = "帽子";
  // console.log(prePage);
};

//   選擇恐龍 
function showImgChange(e){
  getId("showImg_Mall").src = e.target.src;
};  

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

let ct = 0;
function openModalBoxC(){
  ct++;
  if(ct>2){
    alert("最多儲存 2 張");
    return -1;
  };
  getId("bg-modal").style.display='flex';

  let modalContent = document.getElementsByClassName("modal-content")[0];
  let canvasObj = html2canvas(document.getElementsByClassName("cardLeft")[0]).then(canvas => {
    modalContent.appendChild(canvas);
    });
    // console.log(canvasObj); // 一個物件
    closeModalBoxB();   // 清空物件   
};


// closeModalBox A / C
function closeModalBoxA(){
  getId("bg-modal-a").style.display='none';
};
function closeModalBoxC(){
  getId("bg-modal").style.display='none';
};

// 脫光光 B
function closeModalBoxB(){
  getId("showHat").style.display='none';
  getId("showSticker").style.display='none';
};



  // 函式 ==================================================
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  function showCart(){
    // getId("bgColor").style.display='block';
    getId("bgColor").classList.toggle(`show`);
  };

  function closesShoppingCart(){
    // getId("bgColor").style.display='none';
    getId("bgColor").classList.remove(`show`);
  };

  function removeCartItem(e) {
    const counter = getId('counter');
    if ( counter < 0) {
      counter = 0;
    }
    count--;
    counter.innerText = count;

    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();

  };

  function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    // console.log(cartRows);
    
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        // console.log(priceElement);
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        // console.log(quantityElement);
        let price = priceElement.innerText.replace('$', ''); // 取代
        let quantity = quantityElement.value; // 數量
        total = total + (price * quantity);
    };
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  };

  // input change 
  function quantityChanged(e) {
    // if (isNaN(e.target.value) || e.target.value <= 0) {
    if ( e.target.value <= 0) {
      e.target.value = 1;
    }
    updateCartTotal();
  };

  // shakeCart
  function shake(){
    let timerId;
    let cart = document.getElementsByClassName('cart')[0];
    function shakeCart(){
      cart.classList.add('shake');
        clearInterval(timerId);
      }
      cart.classList.remove('shake');     
      timerId = setInterval(shakeCart, 500);
  };

  // add item
  let count =0;
  function addToCartClicked(e) {
    // count
    // let count =0;
    count++;
    let counter = getId('counter');
    counter.innerText = count;

    let button = e.target;
    let shopItemCard = button.parentElement.parentElement;
    // console.log(shopItemCard);
    let title = shopItemCard.getElementsByClassName(' shopItemImage')[0].title;
    let price = shopItemCard.getElementsByClassName('shopItemPrice')[0].innerText;
    // console.log(title,price);
    let imageSrc = shopItemCard.getElementsByClassName(' shopItemImage')[0].src;
    // console.log(imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
  };

  // add to html
  function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div');
    // cartRow.innerText
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    // console.log(cartItemNames);
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('這個項目已被加入購物車!!!');
            count--;
            counter.innerText = count;        
            return;
        };
    };
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">刪除</button>
        </div>`
    cartRow.innerHTML = cartRowContents; // insert to shoppingCart.html
    cartItems.append(cartRow);

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  };

  // purchase
  function purchaseClicked() {
    alert('購買成功!!!');

    let cartItems = document.getElementsByClassName('cart-items')[0];        
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        // cartItems.removeChild(cartItems.childNodes[0]);
    }

    updateCartTotal();
    clear(); 
  };       

  // 清空  <p id = counter> 0 </p>
  function clear(){
    count = 0;
    let counter = getId('counter');
    counter.innerText = 0 ; 
  }



// =========================================================
function init(){
  // let imgs =  document.getElementsByClassName("imgClass");
  let imgs =  document.querySelectorAll('.imgClassHat');
              console.log(imgs);
  for(let i=0; i<imgs.length; i++){
    imgs[i].onclick = showImgHat;
  };


  let imgsSticks =  document.querySelectorAll('.imgSticks');
              // console.log(imgsSticks);
  for(let i=0; i<imgsSticks.length; i++){
    imgsSticks[i].onclick = showImgSticks;
  };


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




  // INIT()  =============================================
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->
  // <!-- CART CART CART -->

  // showCart
  // const cart = document.getElementsByClassName('cart')[0];
  let cart = document.getElementById('cart');
  cart.onclick = showCart;  
  let  btnCloseCart= getId("closeCart"); 
  btnCloseCart.onclick = closesShoppingCart;

  // delete btn
  let removeCartButton = document.getElementsByClassName('btn-danger');
  // console.log(removeCartButton);
  for(let i=0; i<removeCartButton.length; i++){
      let btnCart =  removeCartButton[i];
      btnCart.addEventListener('click',removeCartItem); 
  };

  // input change
  let quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      // console.log(input);
      input.addEventListener('change', quantityChanged);
  };

  // add item
  let addToCartButtons = document.getElementsByClassName('smallCart');
  for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i];
      // console.log(button);
      button.addEventListener('click', addToCartClicked);   
      button.addEventListener('click', shake);   
  };

  // purchase
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

}

window.onload = init;





