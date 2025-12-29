function renderLeaderboard() {
  const container = document.getElementById("leaderboard");
  if(!container) return;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.sort((a,b)=> b.points - a.points);
  container.innerHTML = "<h2>Top 20 Students</h2>";
  const list = document.createElement("ol");
  users.slice(0,20).forEach(u=>{
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.points} pts`;
    list.appendChild(li);
  });
  container.appendChild(list);
}

window.addEventListener("load", renderLeaderboard);
