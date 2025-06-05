let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");

    let newCard = 3;
    sum += newCard;
    renderGame();
}