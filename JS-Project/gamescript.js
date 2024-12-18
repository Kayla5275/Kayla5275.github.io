document.addEventListener("DOMContentLoaded", () => {
  // Levels get harder as you go
  const wordBanks = {
      1: ["bananas", "apples", "pears", "kiwis"],
      2: ["peaches", "oranges", "lemons", "cherries"],
      3: ["watermelons", "strawberries", "blueberries", "pineapples"],
  };

  let words = wordBanks[1];
  const wordContainer = document.getElementById("word-container");
  const inputBox = document.getElementById("input-box");
  const scoreDisplay = document.getElementById("score");
  const levelDisplay = document.getElementById("level");
  const timerDisplay = document.getElementById("timer");
  const messageDisplay = document.getElementById("message");

  let currentWord = "";
  let score = 0;
  let level = 1;
  let timeLeft = 60;
  let timer;

  // Load level-up sound
  const levelUpSound = new Audio("/JS-Project/assets/76234__jivatma07__level_up_3note2.wav");

  // Function to start the game
  function startGame() {
      resetInput();
      setNewWord();
      updateTimer();
      timer = setInterval(updateTimer, 1000);
  }

  // Function to reset input box
  function resetInput() {
      inputBox.value = "";
      inputBox.focus();
  }

  // Function to set a new word
  function setNewWord() {
      currentWord = words[Math.floor(Math.random() * words.length)];
      wordContainer.textContent = currentWord;
  }

  // Function to update the timer
  function updateTimer() {
      timerDisplay.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
          clearInterval(timer);
          gameOver();
      } else {
          timeLeft--;
      }
  }

  // Function to handle game over
  function gameOver() {
      messageDisplay.textContent = `Game Over! Final Score: ${score}`;
      wordContainer.textContent = "";
      inputBox.disabled = true;
  }

  // Function to level up
  function levelUp() {
      level++;
      //timeLeft = 10 - level > 3 ? 10 - level : 3; // Reduce time for each level, minimum 3s
      levelDisplay.textContent = `Level: ${level}`;

      // Play level-up sound
      levelUpSound.play();

      // Update the word bank if the level exists in wordBanks
      if (wordBanks[level]) {
          words = wordBanks[level];
      }
  }

  // Event listener for typing
  inputBox.addEventListener("input", () => {
      if (inputBox.value.trim() === currentWord) {
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
          setNewWord();
          resetInput();

          if (score % 10 === 0) {
              levelUp();
          }
      }
  });

  // Start the game
  startGame();
});

  