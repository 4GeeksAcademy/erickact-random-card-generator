/* eslint-disable */
import "./style.css";

const getRandomNumber = max => Math.floor(Math.random() * (max + 1));

const letters = {
  0: "2",
  1: "3",
  2: "4",
  3: "5",
  4: "6",
  5: "7",
  6: "8",
  7: "9",
  8: "10",
  9: "J",
  10: "Q",
  11: "K",
  12: "A"
};

const symbols = {
  0: "♠",
  1: "♣",
  2: "♥",
  3: "♦"
};

const getCard = () => {
  let randomForLetter = getRandomNumber(12);
  let randomForSymbol = getRandomNumber(3);

  let letter = letters[randomForLetter];
  let symbol = symbols[randomForSymbol];
  let color = ["♠", "♣"].includes(symbol) ? "text-dark" : "text-danger";

  document.getElementById("symbol1").innerHTML = symbol;
  document.getElementById("letter").innerHTML = letter;
  document.getElementById("symbol2").innerHTML = symbol;

  document
    .getElementById("symbol1")
    .classList.remove("text-dark", "text-danger");
  document
    .getElementById("symbol2")
    .classList.remove("text-dark", "text-danger");

  document.getElementById("symbol1").classList.add(color);
  document.getElementById("symbol2").classList.add(color);
};

window.onload = function() {
  getCard();

  setInterval(getCard, 10000);
};

document.getElementById("getCardButton").addEventListener("click", () => {
  getCard();
});

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  let cardNode = document.getElementById("card");
  let warningNode = document.getElementById("warning");

  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  const minWidth = 200;
  const minHeigth = 300;

  if (width < minWidth || height < minHeigth) {
    warningNode.textContent = `The minimum value that the width can have is ${minWidth}px and the height is ${minHeigth}px.`;
  } else {
    warningNode.textContent = "";
    cardNode.style.width = `${width}px`;
    cardNode.style.height = `${height}px`;
  }
});
