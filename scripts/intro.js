// Typewriter effect using GSAP
const text = "Réalisez vos rêves d’études à l’international.";
let i = 0;
const speed = 55;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);
