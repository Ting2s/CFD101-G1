//---close
let clo = document.getElementById('close');
let teach = document.getElementById('teach');

clo.addEventListener('click', function (e) {
    teach.classList.add("closeAnimation");
})


//fish click事件
let Fish_1 = document.getElementById("Fish-1");
let Fish_2 = document.getElementById("Fish-2");
let Fish_3 = document.getElementById("Fish-3");
let Fish_4 = document.getElementById("Fish-4");
let Fish_5 = document.getElementById("Fish-5");
let Fish_6 = document.getElementById("Fish-6");
let i = 0;

//----fish-1事件
function hide() {
    Fish_1.classList.add('remove');
    add();
}
function appear() {
    setInterval(() => {
        Fish_1.classList.remove('remove');
    }, 5000);
}

//----fish-2事件
function hide_2() {
    Fish_2.classList.add('remove');
    add();
}
function appear_2() {
    setInterval(() => {
        Fish_2.classList.remove('remove');
    }, 5000);
}

//----fish-3事件
function hide_3() {
    Fish_3.classList.add('remove');
    add();
}
function appear_3() {
    setInterval(() => {
        Fish_3.classList.remove('remove');
    }, 5000);
}

//----fish-4事件
function hide_4() {
    Fish_4.classList.add('remove');
    add();
}
function appear_4() {
    setInterval(() => {
        Fish_4.classList.remove('remove');
    }, 5000);
}

//----fish-5事件
function hide_5() {
    Fish_5.classList.add('remove');
    add();
}
function appear_5() {
    setInterval(() => {
        Fish_5.classList.remove('remove');
    }, 4000);
}

//----fish-6事件
function hide_6() {
    Fish_6.classList.add('remove');
    add();
}
function appear_6() {
    setInterval(() => {
        Fish_6.classList.remove('remove');
    }, 5000);
}

function init() {
    appear();
    Fish_1.onclick = hide;
    appear_2();
    Fish_2.onclick = hide_2;
    appear_3();
    Fish_3.onclick = hide_3;
    appear_4();
    Fish_4.onclick = hide_4;
    appear_5();
    Fish_5.onclick = hide_5;
    appear_6();
    Fish_6.onclick = hide_6;
}



//grow up進度條
let j = 0;
let sq = document.getElementById("sq_"+j);

let Grow = document.getElementsByClassName('Grow-sq')[0];
function add(){
        Grow.children[j].style.display = 'block';
        j ++;
        console.log(Grow.children[j]);
}

window.onload = init;



