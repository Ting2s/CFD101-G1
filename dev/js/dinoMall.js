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

//  arrow switch page
  function prePageshowImg(){
      let btnCard = getId("btnCard-2");
      btnCard.classList.remove("none");

      let kk = document.querySelectorAll(".btnCard-1");
      for(let i=0;i<kk.length;i++){
        kk[i].style.display="none";
      };
      getId("showName").innerText = "貼紙";
};

function nextPageshowImg(){
 getId("btnCard-2").classList.add("none");
    let kk = document.querySelectorAll(".btnCard-1");
    for(let i=0;i<kk.length;i++){
          kk[i].style.display="";
        };
  getId("showName").innerText = "帽子";
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

// 儲存恐龍
let ct = 0;
function openModalBoxC(){

  if(member.mem_id == undefined){
    alert("請先登入會員") ;
    // console.log(member);
    return; 
  };

  ct++;
  if(ct>2){
    alert("最多儲存 2 張");
    return;
  };
  // 打開 MallModalBoxC.html
  getId("bg-modal").style.display='flex';

  // let modalContent = document.getElementsByClassName("modal-content")[0];
  let modalContent = document.getElementsByClassName("newCanvas")[0];
  let canvasObj = html2canvas(document.getElementsByClassName("cardLeft")[0]).then(canvas => {
    modalContent.appendChild(canvas);
    // console.log(new Date().getMinutes());
    setTimeout(saveImage, 3000);    
    });
  closeModalBoxB();   // 清空物件   
};


 function saveImage(){

      // console.log(new Date().getMinutes());
      let canvas = document.getElementsByTagName("canvas")[0];
            console.log(canvas);
      var dataURL = canvas.toDataURL("image/png");
            // console.log(dataURL);
    document.getElementById('hidden_data').value = dataURL;

    let formData = new FormData(document.getElementById("myForm"));

    var xhr = new XMLHttpRequest();
      xhr.onload = function() {
            if( xhr.status == 200 ){
              alert('Succesfully uploaded'); 
              // console.log( xhr.responseText);
                // document.getElementById("download").href = xhr.responseText;
                // document.getElementById("download").innerText = "下載";
            }else{
              alert(xhr.status);
            }
      }; 
    xhr.open('POST', './php/dinoMallCanvas.php', true);

    xhr.send(formData);
    // xhr.send(`data=${dataURL}`);
}


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
  // <!-- CART CART CART  CART CART CART  CART CART CART -->
  // <!-- CART CART CART  CART CART CART  CART CART CART-->

  function showCart(){
    // getId("bgColor").style.display='block';
    // console.log("===========123");
    getId("bgColor").classList.toggle(`showOpen`);
  };

  function closesShoppingCart(){
    // getId("bgColor").style.display='none';
    getId("bgColor").classList.remove(`showOpen`);
  };

  
  // addItem storage
  let storage = sessionStorage;
  function addItem(itemId,itemValue) {
    //存入storage , itemId,itemValue
    if(storage[itemId]){
        // alert('You have checked.');
    }else{
        storage['addItemList'] += itemId + ", ";
        storage.setItem(itemId,itemValue);
    }
  }

  function deleteItem(itemId){
          storage.removeItem(itemId);
  }

  function removeCartItem(e) {
    // remove storage
    let button = e.target;
    let shopItemCard = button.parentElement.parentElement;
    let productID = shopItemCard.getElementsByClassName('productID')[0].value;
    deleteItem(productID);

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

  let cartTotal = 0; 
  function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    // console.log(cartRows);
    
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let productID = cartRow.getElementsByClassName('productID')[0].value;
        // console.log(priceElement);
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        // console.log(quantityElement);
        let price = priceElement.innerText.replace('$', ''); // 取代
        let quantity = quantityElement.value; // 數量

        // localstorage
        let obj = {price, quantity} ;
        storage.setItem(productID,JSON.stringify(obj));
        cartTotal = cartTotal + (price * quantity);     //  訂單總額
    };
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + cartTotal;
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
    count++;
    let counter = getId('counter');
    counter.innerText = count;

    let button = e.target;
    let shopItemCard = button.parentElement.parentElement;
    let productID = shopItemCard.getElementsByClassName('productID')[0].value;
    let title = shopItemCard.getElementsByClassName('shopItemImage')[0].title;
    let price = shopItemCard.getElementsByClassName('shopItemPrice')[0].innerText;
    let imageSrc = shopItemCard.getElementsByClassName('shopItemImage')[0].src;

    // localstorage
    addItem(productID,price);

    addItemToCart(productID,title, price, imageSrc);
    updateCartTotal();
  };

  // add to shoppingCart.html
  function addItemToCart(productID,title, price, imageSrc) {
    let cartRow = document.createElement('div');
    // cartRow.innerText
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
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
        <input type="hidden" class="productID" value="${productID}"/>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1"/>
            <button class="btn btn-danger" type="button">刪除</button>
        </div>`
    cartRow.innerHTML = cartRowContents; // insert to shoppingCart.html
    cartItems.append(cartRow);

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  };

  function purchaseClicked(){   
    
    if(member.mem_id == undefined){
        alert("請先登入會員") ;
        // console.log(member);
        return; 
    }

    //  POST PHP -> SERVER
    postCart();

    alert('購買成功!!!');
    let cartItems = document.getElementsByClassName('cart-items')[0];        
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        // cartItems.removeChild(cartItems.childNodes[0]);
    }; 
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
function my_init(){
  // let imgs =  document.getElementsByClassName("imgClass");
  // 點擊 帽子
  let imgs =  document.querySelectorAll('.imgClassHat');
              // console.log(imgs);
  for(let i=0; i<imgs.length; i++){
    imgs[i].onclick = showImgHat;
  };

  // 點擊 紋身貼紙
  let imgsSticks =  document.querySelectorAll('.imgSticks');
              // console.log(imgsSticks);
  for(let i=0; i<imgsSticks.length; i++){
    imgsSticks[i].onclick = showImgSticks;
  };


  //  arrow switch page
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

  // showCart
  // const cart = document.getElementsByClassName('cart')[0];
  let cart = document.getElementById('cart');
  console.log(cart); 
  cart.onclick = showCart;  
  let  btnCloseCart= getId("closeCart"); 
  btnCloseCart.onclick = closesShoppingCart;

  // delete btn
  let removeCartButton = document.getElementsByClassName('btn-danger');
  for(let i=0; i<removeCartButton.length; i++){
      let btnCart =  removeCartButton[i];
      btnCart.addEventListener('click',removeCartItem); 
  };

  // input change
  let quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
  };

  // add item
  let addToCartButtons = document.getElementsByClassName('smallCart');
  for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);   
      button.addEventListener('click', shake); 
  };


  // purchase
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

  let storage = sessionStorage;
  doFirst();
  } // myinit()

  window.addEventListener('load',function(){
        my_init();
  });
// window.onload = init;  
// =================================================================================================


//  localstorage 
// let storage = sessionStorage;
function doFirst(){
    if(storage['addItemList'] == null){//重新整理時,還會保留addItemList之下的value 值
        storage['addItemList'] = '';   //storage.setItem('addItemList','')
    }
  }

function postCart(){  
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){  
          console.log("readyState ==> onload事件 : ", xhr.readyState );
          if( xhr.status == 200){ 
              console.log( xhr.responseText);
          }else{
              alert(xhr.status);
          }
    }

    xhr.open("POST","./php/InsertMall.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    var data = {};
    data.items = [];
    data.cartTotal = 0;
    var orderList ={}
    
    if(storage['addItemList'] == null){  // 重新整理時 , 還會保留 addItemList 之下的 value 值
      storage['addItemList'] = '';       //storage.setItem('addItemList','')
     }

    let itemString = storage.getItem('addItemList'); // addItemList 的 value
    let items = itemString.substr(0, itemString.length - 2).split(', '); // 231 行
    // console.log(items);   // ["1", "2", "3", "4", "5", "6"]

    for(let i = 0; i < items.length; i++){
        let itemInfo = JSON.parse(storage.getItem(items[i])); // value => $10  $20 $30 ...
        let psn = parseInt(items[i]); //  1 ~ 12
        let item = {};
        item.psn = psn;
        item.price = itemInfo.price;
        item.quantity = itemInfo.quantity;
        data.items.push(item);
    }
    data.cartTotal = cartTotal;

    let data_info = "data=" + JSON.stringify(data);
    xhr.send(data_info);
    
    storage.clear();
}

