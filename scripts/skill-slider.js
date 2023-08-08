// slider-script.js
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
    const numVisibleSlides = 4;

    function showSlide(index) {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${index * (100 / numVisibleSlides)}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function setTransitionEndListener() {
        slider.addEventListener('transitionend', () => {
            if (slideIndex === slides.length - numVisibleSlides) {
                slider.style.transition = 'none';
                slideIndex = 0;
                showSlide(slideIndex);
            }
        });
    }

    setTransitionEndListener();
    showSlide(slideIndex);
    setInterval(nextSlide, 3000);
});
