let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    slides.style.transform = `translateX(${-slideIndex * 320}px)`;
}

function nextSlide() {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}


