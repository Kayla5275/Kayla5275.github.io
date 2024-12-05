document.addEventListener("DOMContentLoaded", () => {
    const words = ["bananas", "apples", "pears", "peaches", "kiwis", "oranges", "watermelons", "cherries", "lemons", "strawberries"];
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
      timeLeft = 10 - level > 3 ? 10 - level : 3; // Reduce time for each level, minimum 3s
      levelDisplay.textContent = `Level: ${level}`;
    }
  
    // Event listener for typing
    inputBox.addEventListener("input", () => {
      if (inputBox.value.trim() === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        setNewWord();
        resetInput();
  
        if (score % 5 === 0) {
          levelUp();
        }
      }
    });
  
    // Start the game
    startGame();
  });
  