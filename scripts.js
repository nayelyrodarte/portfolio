const cards = document.getElementsByClassName("card");
const leftArrowButton = document.querySelector(".left-arrow");
const rightArrowButton = document.querySelector(".right-arrow");

let value = 0;

function moveToRight() {
  if (value > cards.length - 1) {
    rightArrowButton.disabled = true;
    value = cards.length - 1;
  } else {
    leftArrowButton.disabled = false;
    value = value + 1;
  }
  showCard();
}

function moveToLeft() {
  if (value < 0) {
    leftArrowButton.disabled = true;
    value = 0;
  } else {
    rightArrowButton.disabled = false;
    value = value - 1;
  }
  showCard();
}

function showCard() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("card-transform");
  }
  cards[value].classList.add("card-transform");
  cards[value].scrollIntoView({ behavior: "smooth" });
}

rightArrowButton.addEventListener("click", moveToRight);
leftArrowButton.addEventListener("click", moveToLeft);
