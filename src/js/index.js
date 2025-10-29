import * as bootstrap from 'bootstrap';

// NAVBAR SCROLL COLOR CHANGE
window.addEventListener('scroll', () => {
    let navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
    let navLinks = document.querySelectorAll('.nav-link')
    let scrollPosition = window.scrollY;

    if (scrollPosition > 700) {
        navbarTogglerIcon.classList.add('navbar-toggler-icon__scrolled');
        navLinks.forEach(navLink => navLink.classList.add('nav-links__scrolled'));
    } else {
        navbarTogglerIcon.classList.remove('navbar-toggler-icon__scrolled');
        navLinks.forEach(link => link.classList.remove('nav-links__scrolled'));
    }
});