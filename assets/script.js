// This program allows users to find synonym of words they are looking for
// The application also allows to favorite terms so see at another time

/*
If user types in a phrase
Print words that have like or similar meanings
If a user wants 
*/

/*
When submit button is clicked
If search box is empty
then display a message to write something
If search box has a word
have the script fetch the api and load synonyms
(maybe ask user if they would like to favorite their search result?)
*/

/*
Display history of previous searches within local storage
have local storage get item
display previous results when search bar is clicked
load previous result when selected
*/


/* When favorite button is clicked
then add the previously used term to the local storage
When clicking on favorite list button
Display the favorite list
(Add a remove button?)
*/

function onSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    const input = document.getElementById("input");
    console.log(input.value);
}