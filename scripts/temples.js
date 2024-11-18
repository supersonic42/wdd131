const menuToggler = document.querySelector('.menu-toggler');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const mainTitle = document.querySelector('main h2');

menuToggler.addEventListener('click', function() {
    header.classList.add('menu-active');
});

menuCloseBtn.addEventListener('click', function() {
    header.classList.remove('menu-active');
});

navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
        mainTitle.textContent = this.textContent;
        header.classList.remove('menu-active');
    });
});

/* Footer */
const today = new Date();
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;
