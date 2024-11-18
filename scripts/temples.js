const menuToggler = document.querySelector('.menu-toggler');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const header = document.querySelector('header');

menuToggler.addEventListener('click', function() {
    header.classList.add('menu-active');
});

menuCloseBtn.addEventListener('click', function() {
    header.classList.remove('menu-active');
});
