const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu-list');

burger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('active')
})

mobileMenu.querySelectorAll('.header__menu-link').forEach((item)=>{
    item.addEventListener('click',() => {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('active')
    })
})

// smooth scroll to anchor-link
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

