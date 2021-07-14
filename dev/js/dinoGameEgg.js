let Bt = document.getElementById("Bt");
let Egg_1 = document.getElementById("egg-1");
let Egg_2 = document.getElementById("egg-2");
let Egg_3 = document.getElementById("egg-3");

//點擊事件
Bt.addEventListener('click', function (e) {
  document.getElementById("Bt").classList.add("remove");
  document.getElementById("Egg").classList.add("egg-animation");

  document.getElementById("egg-1").classList.add("click");
  document.getElementById("egg-1").classList.add("egg-1-move");

  document.getElementById("egg-2").classList.add("click");
  document.getElementById("egg-2").classList.add("egg-2-move");

  document.getElementById("egg-3").classList.add("click");
  document.getElementById("egg-3").classList.add("egg-3-move");
})

//hover效果

// egg-1
Egg_1.addEventListener('mouseenter', () => {
  Egg_1.classList.add("egg-1-touch");
});
Egg_1.addEventListener('mouseleave', () => {
  Egg_1.classList.add("egg-1-leave");
  Egg_1.classList.remove("egg-1-move");
  Egg_1.classList.remove("egg-1-touch");
});

//egg-2
Egg_2.addEventListener('mouseenter', () => {
  Egg_2.classList.add("egg-2-touch");
});
Egg_2.addEventListener('mouseleave', () => {
  Egg_2.classList.add("egg-2-leave");
  Egg_2.classList.remove("egg-2-move");
  Egg_2.classList.remove("egg-2-touch");
});

//egg-3
Egg_3.addEventListener('mouseenter', () => {
  Egg_3.classList.add("egg-3-touch");
});
Egg_3.addEventListener('mouseleave', () => {
  Egg_3.classList.add("egg-3-leave");
  Egg_3.classList.remove("egg-3-move");
  Egg_3.classList.remove("egg-3-touch");
});

