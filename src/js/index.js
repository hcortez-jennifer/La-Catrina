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


// MENU CATEGORY FILTER
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu__category button");
    const menuItems = document.querySelectorAll(".menu__card");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            menuItems.forEach(item => {
                if (category === "all") {
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    if (item.classList.contains(category)) {
                        item.classList.add("show");
                    }
                }
            });
        });
    });
});