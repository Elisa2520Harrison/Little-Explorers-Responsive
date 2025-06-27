document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');

    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!navMenu.classList.contains('hidden')) { 
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex');
            }
        });
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-gray-800", "shadow-md");
    } else {
        navbar.classList.remove("bg-gray-800", "shadow-md");
        navbar.classList.add("bg-transparent");
    }
});

