// Create a new div
// Give this new div a class of "feedback"
// Append this new div to the div with class "guessGame"

/* Create a function that will run when the button is clicked.
When this function runs, it will take the value of the input
tag on the page and log it to the console.
*/

// Add that function to the onclick property of
// the button on the page.
//Jasmine Flores


//document.addEventListener (function (){
  //  var div= document.createElement('div');
  //  div.className="feedback";

//}



let feedback= document.createElement("div");
feedback.className= "feedback";


let container = document.querySelector(".guessGame");
container.appendChild(feedback);






function playGame () {
    
    let userInputTag = document.querySelector(".guessButton");
    let userInput = parseInt (userInputTag.value);

    let  min=1;
    let max=100;
    let answer = Math.floor(Math.random()*(max-min)+min);

    if (userInput > answer) {
        feedback.innerText= "oops too high!"
    }

    else if (userInput < answer) {
        feedback.innerText= "oops too low"
    }

    else if (userInput === answer) {
        feedback.innerText= "you got it!"
    }
}



let button = document.querySelector(".guessButton");
button.onclick = playGame;



        



