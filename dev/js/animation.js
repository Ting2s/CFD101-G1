//翼手龍飛行路線
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x: 100, y: -20},
    {x: 300, y: 20},
    {x: 500, y: 100},
    {x: 720, y: -50},
    {x: 330, y: 20},
    {x: 800, y: 0},
    {x: window.innerWidth, y: -220}
  ]
};
//太陽升起路線
const risePath ={
  curviness: 0,
  autoRotate: true,
  values: [
    {y: -100},
    {y: -500},
  ]
};
//左側雲移動路線
const driftPath ={
  curviness: 0,
  autoRotate: true,
  values: [
    {x: -500}
  ]
};
//右側雲移動路線
const driftPath2 ={
  curviness: 0,
  autoRotate: true,
  values: [
    {x: 100},
    {x: 500},
  ]
};
//海洋場景雲群移動路線
const driftPath3 ={
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x: 100},
    {x: 200},
    {x: 500},
    {x: 600},
    {x: 900},
  ]
};
//蛇頸龍游泳路線
const swimPath ={
  curviness: 1.25,
  autoRotate: false,
  values: [
    {x: -100, y: -20},
    {x: -300, y: 40},
    {x: -500, y: -20},
    {x: -600, y: 80},
    {x: -800, y: -30},
    {x: -1000, y: 50},
    {x: -1400, y: -10},
    {x: -1600, y: 60}
  ]
};
//劍龍出現路線
const walkPath ={
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x: 100},
    {x: 200},
    {x: 250},
  ]
};

//宣告場景變數
const tween1= new TimelineLite();
const tween2 = new TimelineLite();
const tween3 = new TimelineLite();

tween1.add(
  TweenLite.to(".pterodactyl", 3, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);
tween1.add(
  TweenLite.to(".sun", 1, {
    bezier: risePath,
    ease: Power1.easeInOut
  })
);
tween1.add(
  TweenLite.to(".cloud-fl", 1, {
    bezier: driftPath,
    ease: Power1.easeInOut
  })
);
tween1.add(
  TweenLite.to(".cloud-r", 1, {
    bezier: driftPath2,
    ease: Power1.easeInOut
  })
);

tween2.add(
  TweenLite.to(".cloud-sea", 3, 
  {
    bezier: driftPath3,
    ease: Power1.easeInOut
  })
);
tween2.add(
  TweenLite.to(".plesiosaurus", 4, 
  {
    bezier: swimPath,
    ease: Power1.easeInOut
  })
);
tween3.add(
  TweenLite.to(".stegosaurus", 6, 
  {
    bezier: walkPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: '.sky',
  duration: 4000,
  triggerHook: 0,
})
.setTween(tween1)
// .addIndicators()
.setPin('.sky')
.addTo(controller);

// const controller2 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: '#sea',
  duration: 5000,
  triggerHook: 0,
})
.setTween(tween2)
// .addIndicators()
.setPin('.sea')
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.land',
  duration: 4000,
  triggerHook: 0,
})
.setTween(tween3)
// .addIndicators()
.setPin('.land')
.addTo(controller);



