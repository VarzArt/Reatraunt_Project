const slides = document.querySelectorAll(".main-image .slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}
