document.addEventListener("DOMContentLoaded", () => {
    // Levels get harder as you go
    const wordBanks = {
        1: ["bananas", "apples", "pears", "kiwis"],
        2: ["peaches", "oranges", "lemons", "cherries"],
        3: ["apricots", "papayas", "grapefruits", "cranberries"],
        4: ["watermelons", "strawberries", "blueberries", "pineapples"],
    };
  
    let words = wordBanks[1];
    const wordContainer = document.getElementById("word-container");
    const inputBox = document.getElementById("input-box");
    const scoreDisplay = document.getElementById("score");
    const levelDisplay = document.getElementById("level");
    const timerDisplay = document.getElementById("timer");
    const messageDisplay = document.getElementById("message");
    const resetButton = document.createElement("button"); // Create reset button
  
    let currentWord = "";
    let score = 0;
    let level = 1;
    let timeLeft = 60;
    let timer;
  
    // Load level-up sound
    const levelUpSound = new Audio("/JS-Project/assets/76234__jivatma07__level_up_3note2.wav");
  
    // Style and initialize the reset button (hidden initially)
    resetButton.textContent = "Start Over";
    resetButton.style.marginTop = "20px";
    resetButton.style.padding = "10px 20px";
    resetButton.style.fontSize = "16px";
    resetButton.style.cursor = "pointer";
    resetButton.style.display = "none"; // Hide initially
    document.getElementById("game-container").appendChild(resetButton);
  
    // Function to start the game
    function startGame() {
        resetInput();
        setNewWord();
        updateTimer();
        timer = setInterval(updateTimer, 1000);
        inputBox.disabled = false;
        messageDisplay.textContent = "";
        resetButton.style.display = "none"; // Hide reset button when the game starts
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
        resetButton.style.display = "block"; // Show reset button when the game ends
    }
  
    // Function to level up
    function levelUp() {
        level++;
        levelDisplay.textContent = `Level: ${level}`;
  
        // Play level-up sound
        levelUpSound.play();
  
        // Update the word bank if the level exists in wordBanks
        if (wordBanks[level]) {
            words = wordBanks[level];
        }
    }
  
    // Function to reset the game
    function resetGame() {
        clearInterval(timer);
        score = 0;
        level = 1;
        timeLeft = 60;
        words = wordBanks[1];
        scoreDisplay.textContent = `Score: ${score}`;
        levelDisplay.textContent = `Level: ${level}`;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        startGame();
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
  
    // Event listener for reset button
    resetButton.addEventListener("click", resetGame);
  
    // Start the game
    startGame();
  });
  
  