// Update user status based on page
setInterval(() => {
  let user = getCurrentUser();
  if (!user) return;

  const path = window.location.pathname;

  if (path.includes("pomodoro")) user.status = "studying";
  else if (path.includes("flashcard") || path.includes("quizzes")) user.status = "gaming";
  else user.status = "active";

  let users = getUsers();
  const idx = users.findIndex(u => u.email === user.email);
  if (idx !== -1) users[idx] = user;

  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(user));

}, 5000);
