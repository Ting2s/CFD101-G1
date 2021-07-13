new Vue({
  el: '#app',
  data: {  
      isImgClassHat   :true,
      isShopItemImage :true,
      isActive:true,
      message: 'Hello',
      smallCartImg:'./images/dinoMall/smallCart.png',
      colors: ['red','orange','yellow','green','blue','indigo','violet'],

      dinos:['選擇恐龍','脫光光','儲存造型'],
      classmate: [{name:'Andy',age:20},
                  {name:'Brian',age:21},
                  {name:'Carl',age:25},
                  {name:'Dale',age:18},
              ],
       
      itemImgs:[{
                  imgURL:"./images/dinoMall/prod1.png",
                  price:'$10',
                  hat:"海盜帽"
                 },
                 {
                  imgURL:"./images/dinoMall/prod2.png",
                  price:'$20',
                  hat:"皮卡丘"
                },
                {
                  imgURL:"./images/dinoMall/prod3.png",
                  price:'$30',
                  hat:"皇冠"
                },
                {
                  imgURL:"./images/dinoMall/prod4.png",
                  price:'$10',
                  hat:"魔法帽"
                },
                {
                  imgURL:"./images/dinoMall/prod5.png",
                  price:'$10',
                  hat:"紅貝蕾帽"
                },
                {  imgURL:"./images/dinoMall/prod6.png",
                  price:'$40',
                  hat:"綠貝蕾帽"
                }
              ]       
  },
  computed: {
    ground(){

    }
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
    }
  },
    getclass(){
        //  return {imgClassHat:this.isImgClassHat,shopItemImage:this.isShopItemImage};
        //  js 抓不到 (class)
  }
});
