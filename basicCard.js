// Create a new file named BasicCard.js:


// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
// module.exports = BasicCard;

// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

// Examples

// Your constructors should work as follows.

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

//---------------------------------------------------------


module.exports = Questionaire;

//Constructor
function Questionaire(front, back) {
	this.front = front;
	this.back = back;
	}


var firstPresident = new basicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back);