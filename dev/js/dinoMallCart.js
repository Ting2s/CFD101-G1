function showCart(){
  alert("購物系統維修中");
  getId("bgColor").style.display='flex';
}
function closeModalBoxA(){
  getId("bgColor").style.display='none';
}


function init(){
        // cart
        let cart = document.getElementsByClassName('cart')[0];
        cart.onclick = showCart;  

        let  btnCloseA= getId("closeCart"); 
        btnCloseA.onclick = closeModalBoxA;
  
}
window.onload = init;
