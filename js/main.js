const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu-list');

burger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
})
