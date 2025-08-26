// contact.js

// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Form submit event (demo purpose only)
const form = document.querySelector("form");
if(form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for contacting Wisdom Valley School! We will get back to you soon.");
        form.reset();
    });
}
