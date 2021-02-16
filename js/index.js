const header = document.querySelector("header"); 
const navImg = document.querySelector("#nav__img")
const sectionOne = document.querySelector("#intro"); 
  
const sectionOneOptions = { 
    rootMargin: "-100px 0px 0px 0px"
 }; 
  
const sectionOneObserver = new IntersectionObserver(function( 
   entries, sectionOneObserver 
) { 
   entries.forEach(entry => { 
    if (!entry.isIntersecting) { 
       header.classList.add("nav-scrolled"); 
        navImg.src = "../img/nav-img/shopping-cart.png"
    } else { 
       header.classList.remove("nav-scrolled"); 
       navImg.src = "../img/nav-img/shopping cart-white.png"
    } 
   }); 
}, 
sectionOneOptions); 
  
sectionOneObserver.observe(sectionOne); 