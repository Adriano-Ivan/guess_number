"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector("#score").textContent = score;
document.querySelector("#number").textContent = secretNumber;

document.querySelector("#confirm").addEventListener("click", function () {
  const guess = Number(document.querySelector("#choosen-number").value);

  if (!guess) {
    document.querySelector("#situation").textContent = "There is no number !";
  } else if (guess === secretNumber) {
    document.querySelector("#situation").textContent = "Correct number !";

    if (score > highscore) {
      highscore = score;

      document.querySelector("#highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector("#situation").textContent =
        guess > secretNumber ? "Too high !" : "Too low !";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#score").textContent = 0;
      document.querySelector("#situation").textContent = "You lost the game !";
    }
  }
});
