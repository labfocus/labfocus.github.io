// Sidebar toggle
const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
const themeBtnSidebar = document.getElementById("theme-toggle-sidebar");
const body = document.body;

function setThemeBtn(btn) {
  btn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  setThemeBtn(themeBtn);
  setThemeBtn(themeBtnSidebar);
}

[themeBtn, themeBtnSidebar].forEach(btn => {
  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    setThemeBtn(themeBtn);
    setThemeBtn(themeBtnSidebar);
  });
});

// Dropdown toggle
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('show');
  });
});
