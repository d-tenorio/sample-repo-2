// Create a new div
    let feedback = document.createElement("div");

// Give this new div a class of "feedback"
    feedback.className = "feedback";

// Append this new div to the div with class "guessGame"
    // first, get that element
        let container = document.querySelector(".guessGame");
    // then, append it.
        container.appendChild(feedback);


/* Create a function that will run when the button is clicked.
When this function runs, it will take the value of the input
tag on the page and log it to the console.
*/
//this function takes in no inputs
    function playGame() {
        // get the value of the input tag by class on the page
        let userInputTag = document.querySelector(".guessInput");
        // we need to use the value property of the HTML-Element, so we
        // have the user's value called userInputTag.value
        let userInput = userInputTag.value;
        // then, just log it (FOR NOW)
        console.log(userInput);
    }

// Add that function to the onclick property of the button on the page.
        let button = document.querySelector(".guessButton");
// use the function (by name) as the value
        button.onclick = playGame;
        // note the lack of paprantheses


// Now, let's make the function called when the button is clicked
// actually play the game. First, change the name of
// the function to something more sensible like playGame

// Inside that function...
// Make a new variable to store the true answer. This variable
// should have a value of a randomly chosen number between
// 1 and 100 (including the values 1 and 100).
    let userInput = parseInt(userInputTag.value);
    function truAnswer(min, max) {
        let min = 1;
        let max = 100;
        return Math.floor(Math.random() * (max - min) + min);
    }

    
    function truAnswer(min, max) {
        let min = 1;
        let max = 100;
        // return Math.floor(Math.random() * (max - min) + min);
    }
    


// Compare the user's guess to the actual answer. 
        // if the user guess too high //
            if (userInput > truAnswer) {
            // tell the user they guessed too high
                feedback.innerText = "too high";
            }

                // if the user guess too low //
            if  (userInput > truAnswer) {
            // tell the user they guessed too low
                feedback.innerText = "too low";
            }

        // if the user guess too high //
            if  (userInput === truAnswer) {
        // tell the user they guessed too high
                feedback.innerText = "you win";
            }
        

    
//Then, modify
// the text inside the feedback div you created as follows:


// If the guess is too high, tell the user "Too high"
// If the guess is too low, tell the user "Too low"
// If the guess is right, tell the user they've won!

// Note: right now, your game will generate a new guess
// each time the user clicks the button. That's -okay-
// for now, though soon we'll make changes so that the user's
// guesses all check against the same correct answer.