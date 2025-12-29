// Get all users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users array to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Handle Sign Up
function handleSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("All fields required!");
    return;
  }

  let users = getUsers();
  if (users.find(u => u.email === email)) {
    alert("Email already exists!");
    return;
  }

  const newUser = {
    name,
    email,
    password,
    points: 0,
    coins: 0,
    status: "active",
    pomodoroSessions: 0,
    wins: 0,
    profilePic: ""
  };

  users.push(newUser);
  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  alert("Sign up successful!");
  window.location.href = "index.html";
}

// Handle Login
function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Wrong email or password!");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  alert(`Welcome back, ${user.name}!`);
  window.location.href = "index.html";
}

// Get Current User
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
