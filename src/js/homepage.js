import * as bootstrap from 'bootstrap';

import event1 from '../../assets/img/event1.jpg';
import event2 from '../../assets/img/event2.jpg';
import event3 from '../../assets/img/event3.jpg';

// EVENTS CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    let carousel = document.querySelector("#eventsCarousel");
    let bgImage = document.querySelector(".events__img");
    let images = [event1, event2, event3];

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