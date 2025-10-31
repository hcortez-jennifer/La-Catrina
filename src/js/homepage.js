import * as bootstrap from 'bootstrap';

// EVENTS CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    let carousel = document.querySelector("#eventsCarousel");
    let bgImage = document.querySelector(".events__img");

    const event1 = new URL("../../assets/img/event1.jpg", import.meta.url);
    const event2 = new URL("../../assets/img/event2.jpg", import.meta.url);
    const event3 = new URL("../../assets/img/event3.jpg", import.meta.url);

    let images = [event1.href, event2.href, event3.href];

    function updateBackground(event) {
        let activeSlide = event.relatedTarget; 
        let index = [...activeSlide.parentNode.children].indexOf(activeSlide);

        bgImage.classList.add("fade-out");

        setTimeout(() => {
            bgImage.style.backgroundImage = `url(${images[index]})`;

            bgImage.classList.remove("fade-out");
            bgImage.classList.add("fade-in");
        }, 500); 

        setTimeout(() => {
            bgImage.classList.remove("fade-in");
        }, 1000);
    }

    carousel.addEventListener("slide.bs.carousel", updateBackground);
});