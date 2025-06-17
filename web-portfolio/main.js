let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 20000);

document.querySelector(".scroll-to-top-btn")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



