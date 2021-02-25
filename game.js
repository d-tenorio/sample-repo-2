//Anthony

// Create a new div
// Give this new div a class of "feedback"
// Append this new div to the div with class "guessGame"

/* Create a function that will run when the button is clicked.
When this function runs, it will take the value of the input
tag on the page and log it to the console.
*/

// Add that function to the onclick property of
// the button on the page.

/*
Now, let's make the function called when the button is clicked
actually play the game. First, change the name of
the function to something more sensible like playGame

Inside that function...
Make a new variable to store the true answer. This variable
should have a value of a randomly chosen number between
1 and 100 (including the values 1 and 100).

Compare the user's guess to the actual answer. Then, modify
the text inside the feedback div you created as follows:

If the guess is too high, tel
If the guess is too high, tell the user "Too high"
If the guess is too low, tell the user "Too low"
If the guess is right, tell the user they've won!

Note: right now, your game will generate a new guess
each time the user clicks the button. That's -okay-
for now, though soon we'll make changes so that the user's
guesses all check against the same correct answer
*/


let feedback = document.createElement("div");
feedback.className = "feedback";
let container = document.querySelector(".guessGame");
container.appendChild(feedback);

function playGame() {
    let userInputTag = document.querySelector(".guessInput");
    let userInput = parseInt(userInputTag.value); 

    let min = 1;
    let max = 100;
    let answer = Math.floor(Math.random() * (max - min) + min);

    if (userInput > answer) {
        feedback.innerText = "Too high, bro!"
    }

    else if (userInput < answer) {
        feedback.innerText = "Too low, bro!"
    }
    else if (userInput === answer) {
        feedback.innerText = "NICE ^.^"
    }
}

let button = document.querySelector(".guessButton");
button.onclick = playGame;

