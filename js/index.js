const navToggle = (e) => {
    const icons = e.querySelectorAll("img");
    const background = e.parentElement.parentElement.querySelector(".mobile-bg-header");
    const list = e.parentElement.querySelector("ul");

    document.querySelector("body").classList.toggle("scroll");
    background.classList.toggle("display-bg");
    icons[0].classList.toggle("display");
    icons[1].classList.toggle("display-toggle");
    list.classList.toggle("display-list");
};