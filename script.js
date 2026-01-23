const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

document.querySelectorAll(".dropbtn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    document.querySelectorAll(".dropdown-content").forEach(dc => {
      if (dc !== dropdown) dc.classList.remove("show");
    });
    dropdown.classList.toggle("show");
  });
});

window.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-content").forEach(dc =>
    dc.classList.remove("show")
  );
});

const hamburger = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", e => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

window.addEventListener("click", e => {
  if (!navLinks.contains(e.target) && e.target !== hamburger) {
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");
  }
});
