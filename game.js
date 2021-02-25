// Create a new div
let feedback = document.createElement("div");

// Give this new div a class of "feedback"
        // feedback.className = "feedback";

// Append this new div to the div with class "guessGame"
    // first, get that element
            // let container = document.querySelector(".guessGame");
    // then, append it.
            //container.appendChild(feedback);
document.guessGame.appendChild(feedback);

/* Create a function that will run when the button is clicked.
When this function runs, it will take the value of the input
tag on the page and log it to the console.
*/
function Button(guessInput) {
    console.log(guessInput);
}

// Add that function to the onclick property of
// the button on the page.
document.onclick.appendChild(Button);
