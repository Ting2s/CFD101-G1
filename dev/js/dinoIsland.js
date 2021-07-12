let intItem = document.querySelector('.intItem');
let dino_1 = document.querySelector('.Dino-1');


dino_1.addEventListener('mouseenter', () => {
    intItem.style.display = `block`
});
dino_1.addEventListener('mouseleave', () => {
    intItem.style.display = `none`
});