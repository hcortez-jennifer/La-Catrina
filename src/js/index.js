// NAVBAR SCROLL COLOR CHANGE
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.nav-link')
    let scrollPosition = window.scrollY;

    if (scrollPosition > 600) {
        navbar.classList.add('navbar__scrolled');
        navLinks.forEach(navLink => navLink.classList.add('nav-links__scrolled'));
    } else {
        navbar.classList.remove('navbar__scrolled');
        navLinks.forEach(link => link.classList.remove('nav-links__scrolled'));
    }
});
