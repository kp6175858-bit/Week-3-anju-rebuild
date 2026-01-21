const cards = document.querySelectorAll(".slide-up");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
});
