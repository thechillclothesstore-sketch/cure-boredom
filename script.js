let clicks = 0;

function clickGame() {
  clicks++;
  document.getElementById("output").innerText =
    "Clicks: " + clicks;
}

function guessGame() {
  const number = Math.floor(Math.random() * 5) + 1;
  const guess = prompt("Guess a number from 1 to 5");
  if (Number(guess) === number) {
    alert("Correct. Psychic powers confirmed.");
  } else {
    alert("Wrong. It was " + number);
  }
}

function rpsGame() {
  const choices = ["rock", "paper", "scissors"];
  const ai = choices[Math.floor(Math.random() * 3)];
  const user = prompt("rock, paper, or scissors?");
  if (!user) return;

  if (user === ai) alert("Tie. Reality remains unchanged.");
  else if (
    (user === "rock" && ai === "scissors") ||
    (user === "paper" && ai === "rock") ||
    (user === "scissors" && ai === "paper")
  ) alert("You win. Brief joy achieved.");
  else alert("You lose. The AI smiles.");
}
