const navWrapper = document.querySelector('.nav-wrapper');
const anchorTags = document.querySelectorAll('.nav-links a');
const scrollThreshold = 100; // Adjust this value as needed

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navWrapper.classList.add('scrolled');
        anchorTags.forEach(tag => tag.style.color = '#333');
    } else {
        navWrapper.classList.remove('scrolled');
        anchorTags.forEach(tag => tag.style.color = '#fff');
    }
});
