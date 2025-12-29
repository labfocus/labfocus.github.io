function givePoints(email, pts){
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const idx = users.findIndex(u=>u.email===email);
  if(idx!==-1){
    users[idx].points += pts;
    localStorage.setItem("users", JSON.stringify(users));
    alert(`${pts} points added to ${users[idx].name}`);
  }
}
