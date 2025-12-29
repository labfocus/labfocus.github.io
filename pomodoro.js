let timerEl = document.getElementById("timer");
let startBtn = document.getElementById("start");
let time = 25 * 60;
let timerInterval;

function formatTime(t) {
  let m = Math.floor(t/60);
  let s = t % 60;
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function startPomodoro() {
  startBtn.disabled = true;
  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = formatTime(time);

    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Pomodoro session complete! +10 points, +2 coins");
      let user = getCurrentUser();
      user.points += 10;
      user.coins += 2;
      user.pomodoroSessions += 1;
      localStorage.setItem("currentUser", JSON.stringify(user));

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const idx = users.findIndex(u => u.email === user.email);
      if(idx !== -1) users[idx] = user;
      localStorage.setItem("users", JSON.stringify(users));
      startBtn.disabled = false;
      time = 25*60;
      timerEl.textContent = formatTime(time);
    }
  }, 1000);
}

startBtn.addEventListener("click", startPomodoro);
timerEl.textContent = formatTime(time);
