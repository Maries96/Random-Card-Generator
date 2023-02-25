/* eslint-disable */
import "./style.css";

function changeCard() {
  const suite = ["♦", "♥", "♠", "♣"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];

  const cardsIndex = Math.floor(Math.random() * cards.length);
  const cardsValue = cards[cardsIndex];
  const center = document.querySelector("#number");
  center.innerText = cardsValue;

  const suiteIndex = Math.floor(Math.random() * suite.length);
  const suiteValue = suite[suiteIndex];

  const topSuite = document.querySelector("#suite");
  const bottomSuite = document.querySelector("#suite2");

  topSuite.innerText = suiteValue;
  bottomSuite.innerText = suiteValue;

  if (suiteIndex <= 1) {
    topSuite.style.color = "red";
    bottomSuite.style.color = "red";
  } else {
    topSuite.style.color = "black";
    bottomSuite.style.color = "black";
  }
}
window.onload = function() {
  changeCard();
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    changeCard();
  });
};
