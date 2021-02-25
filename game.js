// Create a new div
let feedback = document.createElement("div");

// Give this new div a class of "feedback"
        // feedback.className = "feedback";

// Append this new div to the div with class "guessGame"
    // first, get that element
            let container = document.querySelector(".guessGame");
    // then, append it.
            container.appendChild(feedback);
// THIS IS WRONG // document.guessGame.appendChild(feedback);

/* Create a function that will run when the button is clicked.
When this function runs, it will take the value of the input
tag on the page and log it to the console.
*/
//this function takes in no inputs
    function logValue() {
        // get the value of the input tag on the page
        let userInputTag = document.querySelector(".guessInput");
        // we need to use the value property of the HTML-Element
        let userInput = userInputTag.value;
        // then, just log it (FOR NOW)
        console.log(userInput);
    }
// THIS IS ALSO WRONG // 
//var Button = new Object();
// function Button.onclick("guessInput") {
//     console.log("guessInput");
// }

// Add that function to the onclick property of
// the button on the page.
        let button = document.querySelector(".guessButton");
// use the function (by name) as the value
        button.onclick = logValue; // note the lack of paprantheses
// THIS IS ALSO WRONG
//     logValue.guessButton = function() {
//     logValue.onclick
// }
