//---close
let clo = document.getElementById('close');
let teach = document.getElementById('teach');

clo.addEventListener('click', function (e) {
    teach.classList.add("closeAnimation");
})


//fish click事件
let Tree_1 = document.getElementById("tree-1");
let Tree_2 = document.getElementById("tree-2");
let Grass = document.getElementById("grass");
// let Fish_4 = document.getElementById("Fish-4");
// let Fish_5 = document.getElementById("Fish-5");
// let Fish_6 = document.getElementById("Fish-6");

//----tree-1事件
function hide() {
  Tree_1.classList.add('remove');
    add();
}
function appear() {
    setInterval(() => {
      Tree_1.classList.remove('remove');
    }, 5000);
}

//----fish-2事件
function hide_2() {
  Tree_2.classList.add('remove');
    add();
}
function appear_2() {
    setInterval(() => {
      Tree_2.classList.remove('remove');
    }, 5000);
}

//----fish-3事件
function hide_3() {
  Grass.classList.add('remove');
    add();
}
function appear_3() {
    setInterval(() => {
      Grass.classList.remove('remove');
    }, 5000);
}

//----fish-4事件
// function hide_4() {
//     Fish_4.classList.add('remove');
//     add();
// }
// function appear_4() {
//     setInterval(() => {
//         Fish_4.classList.remove('remove');
//     }, 5000);
// }

// //----fish-5事件
// function hide_5() {
//     Fish_5.classList.add('remove');
//     add();
// }
// function appear_5() {
//     setInterval(() => {
//         Fish_5.classList.remove('remove');
//     }, 4000);
// }

// //----fish-6事件
// function hide_6() {
//     Fish_6.classList.add('remove');
//     add();
// }
// function appear_6() {
//     setInterval(() => {
//         Fish_6.classList.remove('remove');
//     }, 5000);
// }

function init() {
    appear();
    Tree_1.onclick = hide;
    appear_2();
    Tree_2.onclick = hide_2;
    appear_3();
    Grass.onclick = hide_3;
    appear_4();
    // Fish_4.onclick = hide_4;
    // appear_5();
    // Fish_5.onclick = hide_5;
    // appear_6();
    // Fish_6.onclick = hide_6;
}

//小測驗1
let y = document.getElementById('Y');
let n = document.getElementById('N');
let n_1 = document.getElementById('N_1');

y.addEventListener('click', function (e) {
    y.classList.add("right");
    n.classList.add("er");
    n_1.classList.add("er");
    teach_close.classList.remove("remove");
    Grow.children[5].style.display = 'block';
    Grow.children[6].style.display = 'block';
    j = 7;
    g = 28;
    dino.style.transform = `scale(1.28)`;
})

n.addEventListener('click', function (e) {
    y.classList.add("right");
    n.classList.add("er");
    n_1.classList.add("er");
    teach_close.classList.remove("remove");
    j = 5;
})

n_1.addEventListener('click', function (e) {
    y.classList.add("right");
    n.classList.add("er");
    n_1.classList.add("er");
    teach_close.classList.remove("remove");
    j = 5;
})

//小測驗2
let yes = document.getElementById('Y_1');
let no = document.getElementById('N_2');
let no_1 = document.getElementById('N_3');

yes.addEventListener('click', function (e) {
    yes.classList.add("right");
    no.classList.add("er");
    no_1.classList.add("er");
    Grow.children[10].style.display = 'block';
    Grow.children[11].style.display = 'block';
    teach_close_1.classList.remove("remove");
    j = 12;
    g = 43;
    dino.style.transform = `scale(1.43)`;
})

no.addEventListener('click', function (e) {
    yes.classList.add("right");
    no.classList.add("er");
    no_1.classList.add("er");
    teach_close_1.classList.remove("remove");
    j = 10;
})

no_1.addEventListener('click', function (e) {
    yes.classList.add("right");
    no.classList.add("er");
    no_1.classList.add("er");
    teach_close_1.classList.remove("remove");
    j = 10;
})



//teach_close
let teach_close = document.getElementById('teach_close');
let teach_close_1 = document.getElementById('teach_close_1');
let litTest_1 = document.getElementById('litTest_1');
let litTest_2 = document.getElementById('litTest_2');
teach_close.addEventListener('click', function (e) {
    litTest_1.classList.add("closeAnimation");
    litTest_1.classList.add("remove");
})
teach_close_1.addEventListener('click', function (e) {
    litTest_2.classList.add("closeAnimation");
})

//恐龍長大
let dino = document.getElementById('dinopic');

//grow up進度條
let j = 0;
let g = 10;
let Grow = document.getElementsByClassName('Grow-sq')[0];
function add() {
    Grow.children[j].style.display = 'block';
    g+=3; 
    dino.style.transform = `scale(1.${g})`;
    
    j++;
    if (j === 5) {
        litTest_1.classList.remove("remove");

    }
    if (j === 10) {
        litTest_2.classList.remove("remove");
    }
    if(j ===15){
        window.location.href='dinoIsland.html';
    }
}



window.onload = init;

//id.style.witch = 變數%;



