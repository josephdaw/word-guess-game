var timerEl = document.getElementById('countdown');
var startEl = document.getElementById('start');

startEl.addEventListener("click", function() {
  countdown();
});

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

  console.log(key);

  for (let i = 0; i < secretWord.length; i++){
    console.log(secretWord[i]);
    
    if (key == secretWord[i]) {
      console.log("match")
      // add the key to revealedLetters[i]
      revealedLetters[i] = key;

    }
  }
});