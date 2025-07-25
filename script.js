// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-content, .project-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer !'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// dark/light theme toggler
let darkModeIcon = document.querySelector('#darkMode-icon');

// Check for saved mode
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
}

darkModeIcon.onclick = () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');
    } else {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');
    }
};