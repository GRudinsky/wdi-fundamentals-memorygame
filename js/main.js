


// var cards = ['queen', 'king', 'queen', 'king'];
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var gamesWon = 0;
var gamesLost = 0;

function checkForMatch() {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert('You found a match!');
    gamesWon += 1;
  } else {
    alert('Sorry, try again');
    gamesLost += 1;
  }
  updateScore();
};

function flipCard() {
  // "this" refers to the actual "cardElement" clicked from "createBoard" function
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  console.log('User flipped '+ cards[cardId].rank + " of " + cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);

  switch(cardsInPlay.length) {
    case 0:
    // alert("Please flip two cards");
    break;
    case 1:
    // alert("Please flip another card");
    break;
    case 2:
    checkForMatch();
    resetCards();
    break;
    default:
    resetCards();
      }
};

// Function below creates a new game board
function createBoard() {
  shuffle();
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
};
function resetCards() {
  cardsInPlay.length = 0;
  var parent = document.getElementById('game-board');
  while(parent.firstChild) {
    parent.firstChild.remove();
  }
  createBoard();
};

function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
};

function updateScore() {
  document.getElementById('games-won').innerHTML = gamesWon;
  document.getElementById('games-lost').innerHTML = gamesLost;
};
function resetGame () {
  gamesWon = 0;
  gamesLost = 0;
  updateScore();
  resetCards();
};
var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);
createBoard();
