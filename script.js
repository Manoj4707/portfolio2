// Typing effect
const text = "React Frontend Developer | 4+ Years | Fintech & Enterprise Apps";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}
typeText();

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Card animation
const cards = document.querySelectorAll(".card");
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));

// Section animation
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => sectionObserver.observe(section));
