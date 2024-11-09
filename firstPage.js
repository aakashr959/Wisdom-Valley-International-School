// JavaScript for responsive navigation menudocument.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", () => {
        const burger = document.querySelector(".burger");
        const navLinks = document.querySelector(".nav-links");
      
        burger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
          burger.classList.toggle("toggle");
        });
      });
      function searchFunction() {
        const searchQuery = document.querySelector('.navbar-search input').value;
        alert("Search for: " + searchQuery);
    }
    // Messages
    const messages = {
      principal: "Welcome to our school! We strive for excellence in education and personal growth. Our teachers are dedicated to nurturing each student's unique talents and interests, creating a foundation for lifelong learning.",
      manager: "Our goal is to create a supportive environment where students thrive. We believe in fostering a community that values respect, diversity, and resilience. Together, we shape the future with commitment and passion."
  };

  // Function to show full message
  function showFullMessage(role) {
      const messageElement = document.getElementById(`${role}-message`);
      messageElement.textContent = messages[role];
  }
  