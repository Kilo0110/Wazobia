const header = document.querySelector("header")
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const shopImg = nav.querySelector("img")
const sectionOne = document.querySelector("#intro");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const reasonLinks = document.querySelectorAll(".reason__link");
const lines = document.querySelectorAll(".line")
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
            shopImg.src = '../img/nav-img/shopping-cart.png';
            header.classList.add("header-scrolled");
            lines.classList.add("lines-scrolled");
        } 

        else {
            nav.classList.remove("nav-scrolled");
            shopImg.src = '../img/nav-img/shopping cart-white.png'
            header.classList.remove("header-scrolled");
            lines.classList.remove("lines-scrolled");
        }
    });

}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // return;
            entry.target.classList.remove("appear");

        }

        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
    
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

reasonLinks.forEach(reasonLink => {
    appearOnScroll.observe(reasonLink);
});

