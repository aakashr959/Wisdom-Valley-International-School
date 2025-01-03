// JavaScript for Background Slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function changeSlide() {
      slides[currentSlide].style.opacity = 0;
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = 1;
    }
  
    setInterval(changeSlide, 5000); // Change image every 5 seconds
  });
  