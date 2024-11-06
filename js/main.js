let currentSlide = 0;
const slides = document.querySelectorAll(".photoitem");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
