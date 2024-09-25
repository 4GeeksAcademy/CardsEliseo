import "./style.css";

window.onload = function() {
  function generateCard() {
    const suits = ["heart", "diamond", "spade", "club"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ];

    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const selectedSuit = suits[randomSuitIndex];
    const selectedValue = values[randomValueIndex];

    const cardContainer = document.getElementById("card-container");
    cardContainer.className = `card ${selectedSuit}`; // Set class for suit
    cardContainer.innerHTML = `${selectedValue} ${getSuitSymbol(selectedSuit)}`; // Set inner HTML
  }

  function getSuitSymbol(suit) {
    switch (suit) {
      case "heart":
        return "♥";
      case "diamond":
        return "♦";
      case "spade":
        return "♠";
      case "club":
        return "♣";
      default:
        return "";
    }
  }

  function resizeCard() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.width = width + "px";
    cardContainer.style.height = height + "px";
  }

  generateCard();
  // Event listener for the button
  document
    .getElementById("generate-button")
    .addEventListener("click", generateCard);

  // Event listener for resizing the card
  document
    .getElementById("resize-button")
    .addEventListener("click", resizeCard);

  // Automatically generate a card every 10 seconds
  setInterval(generateCard, 10000);
};
