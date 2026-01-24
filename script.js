
/* ===== NAV TOGGLE ===== */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) {
    navMenu.classList.toggle("open");
  }
}

/* ===== SCROLL ANIMATION ===== */
const reveals = document.querySelectorAll(".reveal");
const cards = document.querySelectorAll(".service-card");

function handleScrollAnimation() {
  const windowHeight = window.innerHeight;

  // Reveal sections
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });

  // Service cards animation
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

/* ===== FORM SUBMIT ===== */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
