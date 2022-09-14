
let num = Math.floor(Math.random() * 100 + 1);
let trys = 0;

function guessClick() { 
  // get the guess input
  const guess = document.getElementById("guessInput").value;

  if (guess == num) {
    trys++;
    document.getElementById("inputs").innerHTML = "You guessed " + guess;
    document.getElementById("proximity").innerHTML = "This number is Correct! This took you " + trys + " tries.";
    document.getElementById("guessNum").innerHTML = "Number of guesses: " + trys;
  } else if (guess > num) {
    // if guessed number is higher than actual number
    trys++;
    document.getElementById("inputs").innerHTML = "You guessed " + guess;
    document.getElementById("proximity").innerHTML = "This number is too high.";
    document.getElementById("guessNum").innerHTML = "Number of guesses: " + trys;
  } else {
    // if guessed number is lower than actual number
    trys++;
    document.getElementById("inputs").innerHTML = "You guessed " + guess;
    document.getElementById("proximity").innerHTML = "This number is too low.";
    document.getElementById("guessNum").innerHTML = "Number of guesses: " + trys;
  }
}

const guessBtn = document.getElementById("guessBtn");
// connect button to the function
guessBtn.addEventListener("click", guessClick);


function guessReset() {
  trys = 0;
  document.getElementById("inputs").innerHTML = "Good luck have fun!";
  document.getElementById("proximity").innerHTML = "Awaiting guess...";
  document.getElementById("guessNum").innerHTML = "Number of guesses: " + trys;
}

const resetBtn = document.getElementById("resetBtn");
// connect button to the function
resetBtn.addEventListener("click", guessReset);