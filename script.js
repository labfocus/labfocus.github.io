// 🌙 Theme Toggle
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

// Dropdowns
const taskBtn = document.getElementById("taskBtn");
const taskDropdown = document.getElementById("taskDropdown");
const gameBtn = document.getElementById("gameBtn");
const gameDropdown = document.getElementById("gameDropdown");

function closeAllDropdowns(except = null) {
  if (except !== taskDropdown) taskDropdown.classList.remove("show");
  if (except !== gameDropdown) gameDropdown.classList.remove("show");
}

taskBtn.addEventListener("click", e => {
  e.stopPropagation();
  closeAllDropdowns(taskDropdown);
  taskDropdown.classList.toggle("show");
});

gameBtn.addEventListener("click", e => {
  e.stopPropagation();
  closeAllDropdowns(gameDropdown);
  gameDropdown.classList.toggle("show");
});

window.addEventListener("click", () => {
  closeAllDropdowns();
});
