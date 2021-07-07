let data = {
    disnoitems: [
      {
        imgsrc: './images/disscus/dino6.jpg',
        title: '有可能用琥珀中的恐龍DNA來復活恐龍嗎？',
        date: '2020/10/21',
        view: '5',
        author: '王小明',
        category: '文章類別 :',
        span: '恐龍知識',
        loc:'./dinoArticlepg.html'
      },
      {
        imgsrc: './images/disscus/dino7.jpg',
        title: '恐龍世界第一話:歡樂的一天!',
        date: '2020/6/25',
        view: '13',
        author: '王小明',
        category: '文章類別 :',
        span: '恐龍創作',
        loc:'./dinoArticlepg.html'
      },
      {
        imgsrc: './images/disscus/dino8.jpg',
        title: '想瞭解三角龍的冷知識嗎？',
        date: '2020/5/16',
        view: '3',
        author: '徐涵涵',
        category: '文章類別 :',
        span: '恐龍知識',
        loc:'./dinoArticlepg.html'
      },
      {
        imgsrc: './images/disscus/dino3.jpg',
        title: '跟著劍龍去野餐',
        date: '2020/4/27',
        view: '6',
        author: '徐涵涵',
        category: '文章類別 :',
        span: '恐龍創作',
        loc:'./dinoArticlepg.html'
      },
      {
        imgsrc: './images/disscus/dino4.jpg',
        title: '如何養出滿血迅猛龍?分享熱騰騰的攻略',
        date: '2020/3/21',
        view: '7',
        author: '王小明',
        category: '文章類別 :',
        span: '恐龍分享',
        loc:'./dinoArticlepg.html'
      },
      {
        imgsrc: './images/disscus/dino5.jpg',
        title: '這次拍的亮黃色劍龍!高清40P大家也來分享',
        date: '2020/2/21',
        view: '5',
        author: '王小明',
        category: '文章類別 :',
        span: '恐龍分享',
        loc:'./dinoArticlepg.html'
      },
    ],
    select: {
      type: '全部',
      title: ''
    },
    types: ['全部', '恐龍創作', '恐龍分享', '恐龍知識']
  }
  let vm = new Vue({
    el: "#app",
    data: data,
    computed: {
      typeMenu() {
        if (this.select.type === '全部') {
          return this.disnoitems
        } else {
          return this.disnoitems.filter(item => {
           return item.span ===  this.select.type
          })
        }
      }
    },
    methods: {
      sel(item) {
        this.select.type = item;
      }
    },
  })