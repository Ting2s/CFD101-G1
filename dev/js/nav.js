let Avatar = document.querySelector('.Avatar');
let Member = document.querySelector('.Member');

Avatar.addEventListener('mouseenter', () => {
    Member.style.display = `block`
});
Avatar.addEventListener('mouseleave', () => {
    Member.style.display = `none`
});

//會員箱

let Avatar_box = document.querySelector('.Avatar-box');
let isShowSlide = false;
Avatar.addEventListener('click', function (e) {
    isShowSlide =! isShowSlide
    if (isShowSlide) {
        console.log(true);
        Avatar_box.classList.remove("remove");
        Avatar_box.classList.add("show");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        Avatar_box.classList.add("remove"); 
        Avatar_box.classList.remove("show");    
    }
}, false);