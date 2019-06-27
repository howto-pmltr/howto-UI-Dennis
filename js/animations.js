/** ANIMATION */
let slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 500
};

let slideLeft = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    delay: 500
}

let slideRight = {
    distance: '100%',
    origin: 'right',
    opacity: 0,
    delay: 500
}


ScrollReveal().reveal('.about', slideUp);
ScrollReveal().reveal('.tab', slideUp);
ScrollReveal().reveal('.cards', slideUp);
ScrollReveal().reveal('.slideLeft', slideLeft);
ScrollReveal().reveal('.slideRight', slideRight);
ScrollReveal().reveal('.feature-container', slideUp);
