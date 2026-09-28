const footer = document.querySelector("footer p");
if (footer) footer.textContent = `© ${new Date().getFullYear()} Abolroyani — All Rights Reserved.`;

const cards = document.querySelectorAll(".skill, .project");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: 0.15});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});
