let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
}


// Header Background Change On Scroll 

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});


// Scroll Top

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});