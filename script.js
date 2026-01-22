
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const cards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
