// Create a new file named ClozeCard.js:


// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// module.exports = ClozeCard;

// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

// //--------------------------------------------------------------------------
//Exports function
module.exports = FillTheBlank;

//Constructor
function FillTheBlank(text, blank) {
//These values represent the full text and the cloze-deleted portion of the flashcard text.
	this.full = text;
	this.blank = blank;
	this.partial = text.replace(blank, '...');

	//Makes sure that removed part is inculded in full text.
	if (!text.includes(blank)) {
		console.log('Selected snippet does not appear within full text...Retrying!!!<' + blank + '>');
		return;
	}
}


