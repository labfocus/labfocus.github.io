const flashcards = [
  {q:"2+2?", a:"4"},
  {q:"Capital of PH?", a:"Manila"},
  {q:"5*6?", a:"30"},
  {q:"Water formula?", a:"H2O"}
];

let current = 0;
const cardEl = document.querySelector(".flashcard");
const questionEl = document.createElement("h2");
cardEl.appendChild(questionEl);

function showCard() {
  const card = flashcards[current];
  questionEl.textContent = card.q;
  cardEl.querySelectorAll("button").forEach(btn => btn.remove());
  ["Answer A","Answer B","Answer C","Answer D"].forEach((text,i)=>{
    const btn = document.createElement("button");
    btn.textContent = text === "Answer A" ? card.a : `Wrong ${i}`;
    btn.addEventListener("click", ()=>checkAnswer(btn, card.a));
    cardEl.appendChild(btn);
  });
}

function checkAnswer(btn, correct) {
  if(btn.textContent === correct){
    alert("Correct! +5 points");
    let user = getCurrentUser();
    user.points += 5;
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    btn.classList.add("wrong");
    setTimeout(()=>btn.classList.remove("wrong"),300);
  }
  current = (current+1) % flashcards.length;
  showCard();
}

showCard();
