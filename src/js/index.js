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

// EVENTS CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    let carousel = document.querySelector("#eventsCarousel");
    let bgImage = document.querySelector(".events__img");

    function updateBackground(event) {
        let activeSlide = event.relatedTarget; 
        let newBg = activeSlide.getAttribute("data-bg");

        bgImage.classList.add("fade-out");

        setTimeout(() => {
            bgImage.style.backgroundImage = `url(${newBg})`;

            bgImage.classList.remove("fade-out");
            bgImage.classList.add("fade-in");
        }, 500); 

        setTimeout(() => {
            bgImage.classList.remove("fade-in");
        }, 1000);
    }

    carousel.addEventListener("slide.bs.carousel", updateBackground);
});