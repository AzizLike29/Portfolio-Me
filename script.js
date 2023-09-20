const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Typed js library
let typed = new Typed(".sec-text", {
  strings: ["Fullstack Web Developer", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 90,
  loop: true,
});
