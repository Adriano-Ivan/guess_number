"use strict";

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;

document.querySelector("#score").textContent = score;

document.querySelector("#confirm").addEventListener("click", function () {
  const guess = Number(document.querySelector("#choosen-number").value);

  if (!guess) {
    document.querySelector("#situation").textContent = "There is no number !";
  } else if (guess === secretNumber) {
    document.querySelector("#situation").textContent = "Correct number !";

    document.querySelector("#number").textContent = secretNumber;

    document.querySelector("#user-interact").style.backgroundColor = "#382";

    document.querySelector("#highscore").style.color = "red";
    document.querySelector("#score").style.color = "red";

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

document.querySelector("#again-button").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector("#choosen-number").value = "";

  document.querySelector("#situation").textContent = "Start guessing...";

  document.querySelector("#user-interact").style.backgroundColor = "#238";

  document.querySelector("#highscore").style.color = "#777";
  document.querySelector("#score").style.color = "#777";

  document.querySelector("#number").textContent = "?";

  score = 20;
  document.querySelector("#score").textContent = score;
});
