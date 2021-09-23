var timerEl = document.getElementById('countdown');
var startEl = document.getElementById('start');
var wordEl = document.getElementById('word');

// function for when the 'start' button is clicked
startEl.addEventListener("click", function() {
  countdown();
  revealLetters();
});

// countdown timer function
function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left."

      if (timeLeft == 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "You Lost."
      }
  }, 1000);
}


var secretWord = "javascript";
var revealedLetters = ["_","_","_","_","_","_","_","_","_","_"]

// Keydown event
document.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();

  for (let i = 0; i < secretWord.length; i++){
    // check that the keypress matches a character in the secret word
    if (key == secretWord[i]) {
      // add the key to revealedLetters[i]
      revealedLetters[i] = key;
      revealLetters();
    }  // END - if 
  } //END - for
}); // END - function


function revealLetters() {
  wordEl.textContent = revealedLetters.join(" ");
}