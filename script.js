document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});

const animatedSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold:0.2});

animatedSections.forEach(element => observer.observe(element));

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const height = section.clientHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
