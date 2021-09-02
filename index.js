window.addEventListener('load', () => {
const contenedor_loader = document.querySelector('.contenedor')
contenedor_loader.style.opacity = 0
contenedor_loader.style.visibility = 'hidden'
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


   
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        //animate links    
    navLinks.forEach((link, index) => {
       if (link.style.animation) {
           link.style.animation = '';
       } else 
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
    });

//burger animation 
burger.classList.toggle('toggle');

    });
 

}


    navSlide();
