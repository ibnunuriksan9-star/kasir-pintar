// script.js

// Smooth scrolling functionality
const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

// Example of using smooth scrolling on a button click
document.querySelector('#scrollButton').addEventListener('click', () => {
    const targetSection = document.querySelector('#target');
    smoothScroll(targetSection, 1000);
});

// Animation for elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Dynamic features or elements can be added below based on your specific needs.