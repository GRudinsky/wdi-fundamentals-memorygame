

var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
if (cardsInPlay.length ===2){if (cardsInPlay[0] === cardsInPlay[1]) {alert('You found a match!')

} else { alert('Sorry, try again');
}};

var cardThree = cards[2];
cardsInPlay.push(cardThree);
var cardFour = cards[3];
cardsInPlay.push(cardFour);

console.log("User flipped " + cardOne);
