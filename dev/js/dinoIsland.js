let intItem_1 = document.querySelector('.intItem-1');
let dino_1 = document.querySelector('.Dino-1');
let intItem_2 = document.querySelector('.intItem-2');
let dino_2 = document.querySelector('.Dino-2');
let intItem_3 = document.querySelector('.intItem-3');
let dino_3 = document.querySelector('.Dino-3');
let intItem_4 = document.querySelector('.intItem-4');
let dino_4 = document.querySelector('.Dino-4');
let intItem_5 = document.querySelector('.intItem-5');
let dino_5_col = document.querySelector('.Dino-5-col');
let dino_5 = document.querySelector('.Dino-5');
let intItem_6 = document.querySelector('.intItem-6');
let dino_6 = document.querySelector('.Dino-6');




//翼手龍
dino_1.addEventListener('mouseenter', () => {
    intItem_1.style.display = `block`
});
dino_1.addEventListener('mouseleave', () => {
    intItem_1.style.display = `none`
});

//始祖鳥
dino_2.addEventListener('mouseenter', () => {
    intItem_2.style.display = `block`
});
dino_2.addEventListener('mouseleave', () => {
    intItem_2.style.display = `none`
});

//暴龍
dino_3.addEventListener('mouseenter', () => {
    intItem_3.style.display = `block`
});
dino_3.addEventListener('mouseleave', () => {
    intItem_3.style.display = `none`
});

//劍龍
dino_4.addEventListener('mouseenter', () => {
    intItem_4.style.display = `block`
});
dino_4.addEventListener('mouseleave', () => {
    intItem_4.style.display = `none`
});

//蛇頸龍
dino_5.addEventListener('mouseenter', () => {
    intItem_5.style.display = `block`
});
dino_5.addEventListener('mouseleave', () => {
    intItem_5.style.display = `none`
});
dino_5_col.addEventListener('mouseenter', () => {
    intItem_5.style.display = `block`
});
dino_5_col.addEventListener('mouseleave', () => {
    intItem_5.style.display = `none`
});

//滄龍
dino_6.addEventListener('mouseenter', () => {
    intItem_6.style.display = `block`
});
dino_6.addEventListener('mouseleave', () => {
    intItem_6.style.display = `none`
});

//------判斷得到龍龍(從資料庫取得)

function get() {
    let xhr = new XMLHttpRequest();
}

// let myDino


function initElement() {
    console.log('in');

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            //    myDino = xhr.response;
            let myDinoNum = JSON.parse(xhr.responseText);
            console.log(myDinoNum);

            let mydino = document.querySelector('.Dino-5').children[1].value;

            document.querySelector('.Dino-5').children[1].value =
                myDinoNum[0].dino_no;

            if (mydino ==0){
                document.querySelector('.Dino-5').style.display = `none`
            }
                
               
              } else {
            // alert(xhr.status);
        }
    }
    xhr.open("get", "./php/dinoIsland.php", true);
    xhr.send();
};
initElement();

