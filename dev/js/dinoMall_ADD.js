


new Vue({
  el: '#app',
  data: {  
      prodRows:[], 
      message:"恐龍商城",
      isImgClassHat   :true,
      isShopItemImage :true,
      isImgSticks:true,
      isActive:true,
      smallCartImg:'./images/dinoMall/smallCart.png',
      dinos:['選擇恐龍','脫光光','儲存造型'],
      itemImgs:[
                 {
                  imgURL:"./images/dinoMall/prod1.png",
                  price:'$10',
                  hat:"海盜帽",
                  productID:"1"
                 },
                 {
                  imgURL:"./images/dinoMall/prod2.png",
                  price:'$20',
                  hat:"皮卡丘",
                  productID:"2"
                },
                ] ,
      crownImgs:[
                {                
                  imgURL:"./images/dinoMall/prod3.png",
                  price:'$30',
                  hat:"皇冠",
                  productID:"3"
                },
                {
                  imgURL:"./images/dinoMall/prod4.png",
                  price:'$10',
                  hat:"魔法帽",
                  productID:"4"
                },
                ],
      beretImgs:[
                {
                  imgURL:"./images/dinoMall/prod5.png",
                  price:'$10',
                  hat:"紅貝蕾帽",
                  productID:"5"
                },
                {  imgURL:"./images/dinoMall/prod6.png",
                  price:'$40',
                  hat:"綠貝蕾帽",
                  productID:"6"
                }
              ],
      cardSecs:[
            {
              imgURL:"./images/dinoMall/bow-tie.png",
              price:'$40',
              stick:"bow-tie",
              productID:"7"
            },
            {  imgURL:"./images/dinoMall/flower.png",
              price:'$10',
              stick:"flower",
              productID:"8"
              }
            ],

      middleCards:[
            {
              imgURL:"./images/dinoMall/heart.png",
              price:'$30',
              stick:"heart",
              productID:"9"
            },
            {  imgURL:"./images/dinoMall/rainbow.png",
              price:'$10',
              stick:"rainbow",
              productID:"10"

              }
            ],
      finalCards:[
              {
                imgURL:"./images/dinoMall/shinny.png",
                price:'$30',
                stick:"shinny",
                productID:"11"
              },
              {  imgURL:"./images/dinoMall/star.png",
                price:'$30',
                stick:"star",
                productID:"12"
                }
              ],
       },
  created() {
    // console.log(this.crownImgs[0].hat);
  },
  methods: {
                  btnSelect(index){
                        if( index == 0 ){
                        return "btnSelect_a" ;
                        }else if(index == 1){
                        return "btnSelect_b" ;
                        }else{
                        return "btnSelect_c" ;
                        }
                  },
                  getProduct(){
                        let xhr = new XMLHttpRequest();
                        let self = this;
                        xhr.onload = function(){
                              if(xhr.status == 200){
                              // this.prodRows = xhr.responseText;
                              self.prodRows = JSON.parse(xhr.responseText);
                              console.log(self.prodRows);
                              }else{
                              alert(xhr.status);
                                    }
                         }
                         xhr.open("get", "./php/dinoMall.php", true);
                         xhr.send(null);
                   },
                   changedata(){

                   }
             },
  mounted(){
            this.getProduct();
    },

  components:{
      'my-component':{
            props:["item-imgs","small-img","hat-class","item-image"], 
            template:`
                <div class="btnCard-1" id="btnCard-1">
                      <div class="imgCard" v-for="itemImg in itemImgs" >
                           <div class="card" >
                                  <img :src="itemImg.imgURL" 
                                  :class="{imgClassHat:hatClass,shopItemImage:itemImage}"   :title="itemImg.hat">
                                  <span class="shopItemPrice">{{itemImg.price}}</span>
                                  <input type="hidden" :value="itemImg.productID" class="productID"/>
                                  <div class="smallCart">
                                        <img :src="smallImg" alt="cart">
                                  </div>
                            </div>
                      </div>     
                </div> `
      },
      'next-component':{
            props:["crown-imgs","small-img","hat-class","item-image"],
            template:`
                <div class="btnCard-1" id="btnCard-1">
                    <div class="imgCard" v-for="crownImg in crownImgs">
                          <div class="card">
                                <img :src="crownImg.imgURL" 
                                :class="{imgClassHat:hatClass,shopItemImage:itemImage}"   :title="crownImg.hat">
                                <span class="shopItemPrice">{{crownImg.price}}</span>
                                <input type="hidden" :value="crownImg.productID" class="productID"/>
                                <div class="smallCart">
                                      <img :src="smallImg" alt="cart">
                                </div>
                          </div>
                    </div>     
              </div>  `
      },
      'last-component':{
            props:["beret-imgs","small-img","hat-class","item-image"],
            template:`
            <div class="btnCard-1" id="btnCard-1">
                  <div class="imgCard" v-for="beretImg in beretImgs">
                        <div class="card" >
                              <img :src="beretImg.imgURL" 
                              :class="{imgClassHat:hatClass,shopItemImage:itemImage}"   :title="beretImg.hat">
                              <span class="shopItemPrice">{{beretImg.price}}</span>
                              <input type="hidden" :value="beretImg.productID" class="productID"/>
                              <div class="smallCart">
                                    <img :src="smallImg" alt="cart">
                              </div>
                        </div>
                  </div>     
            </div> `
      },

      'secnd-component':{
          props:["card-secs","small-img","stick-class","item-image"],
          template:`
              <div class="info">
                  <div class="imgCard" v-for="cardSec in cardSecs">
                        <div class="card">
                              <img :src="cardSec.imgURL" :class="{imgSticks:stickClass,
                              shopItemImage:itemImage}"  :title="cardSec.stick">
                              <span class="shopItemPrice">{{cardSec.price}}</span>
                              <input type="hidden" :value="cardSec.productID" class="productID"/>
                              <div class="smallCart">
                                    <img :src="smallImg" alt="cart">
                              </div>
                        </div>
                  </div>
              </div> `
      },
      'middle-component':{
          props:["middle-cards","small-img","stick-class","item-image"],
          template:`                               
            <div class="info">
                <div class="imgCard" v-for="middleCard in middleCards">
                      <div class="card">
                            <img :src="middleCard.imgURL" :class="{imgSticks:stickClass,
                            shopItemImage:itemImage}"  :title="middleCard.stick">
                            <span class="shopItemPrice">{{middleCard.price}}</span>
                            <input type="hidden" :value="middleCard.productID" class="productID"/>
                            <div class="smallCart">
                                  <img :src="smallImg" alt="cart">
                            </div>
                      </div>
                </div>
            </div>`
      },
      'final-component':{
          props:["final-cards","small-img","stick-class","item-image"],
          template:`
              <div class="info">
                  <div class="imgCard" v-for="finalCard in finalCards">
                        <div class="card">
                              <img :src="finalCard.imgURL" :class="{imgSticks:stickClass,
                              shopItemImage:itemImage}"  :title="finalCard.stick">
                              <span class="shopItemPrice">{{finalCard.price}}</span>
                              <input type="hidden" :value="finalCard.productID" class="productID"/>
                              <div class="smallCart">
                                    <img :src="smallImg" alt="cart">
                              </div>
                        </div>
                  </div>
              </div>`
      },
  }
});
