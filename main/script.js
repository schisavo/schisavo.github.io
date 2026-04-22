/* ··················  Card hover in Android ·················· */
if (window.matchMedia("(hover: hover)").matches) { } else {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
}