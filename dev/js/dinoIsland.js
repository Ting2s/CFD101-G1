let intItem_1 = document.querySelector('.intItem-1');
let dino_1 = document.querySelector('.Dino-1');
let intItem_2 = document.querySelector('.intItem-2');
let dino_2 = document.querySelector('.Dino-2');


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