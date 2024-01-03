const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const hamburgerClose = document.querySelector('.hamburger-close');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

hamburgerClose.addEventListener('click', ()=> {
    mobile_menu.classList.remove('active');
})

document.addEventListener('scroll', ()=> {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.display = "flex"
    } else{
        header.style.display = "none"
    }
})