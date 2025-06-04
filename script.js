function toggleMenu() {
  const navList = document.querySelector(".navbar ul");
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
    navList.style.flexDirection = "column";
    navList.style.backgroundColor = "rgba(0,0,0,0.7)";
    navList.style.position = "absolute";
    navList.style.top = "50px";
    navList.style.right = "10px";
    navList.style.padding = "10px";
    navList.style.zIndex = "10000";
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const hiddenSections = document.querySelectorAll(
  ".about, .service, .skill, .contact"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

hiddenSections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});


