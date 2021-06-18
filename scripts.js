const cards = document.getElementsByClassName("card");
const leftArrowButton = document.querySelector(".left-arrow");
const rightArrowButton = document.querySelector(".right-arrow");

rightArrowButton.addEventListener("click", moveToRight);
leftArrowButton.addEventListener("click", moveToLeft);

let position = 0;

// initialize card carousel at position 0
showCard();

function moveToRight() {
  leftArrowButton.disabled = false;
  position = position + 1;
  // show card func needs to be called again to receive the updated value of position
  showCard();
}

function moveToLeft() {
  rightArrowButton.disabled = false;
  position = position - 1;
  showCard();
}

function showCard() {
  // disable buttons to prevent scrolling if selected card is at start or end of the carousel.
  if (position === 0) {
    leftArrowButton.disabled = true;
  }

  if (position === cards.length - 1) {
    rightArrowButton.disabled = true;
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("card-transform");
  }

  cards[position].classList.add("card-transform");
  cards[position].scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}
