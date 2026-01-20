function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}
const cards = document.querySelectorAll(".info-card, .role-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
