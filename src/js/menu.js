import * as bootstrap from 'bootstrap';

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