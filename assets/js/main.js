// animation au chargement de la page 

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});



// Fonctionnalité : Ajout d'une classe au scroll pour un effet dynamique
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

