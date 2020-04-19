// Start game on window load
window.addEventListener("load", init);

// DOM ELEMENTS
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Game levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To Change Level
const currentLevel = levels.medium;

let time = currentLevel; // Timer
let score = 0; // Score Placeholder
let isPlaying = 0; // Is the game running

// Test dictionary
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // countdown every second
  setInterval(countdown, 1000);
  // Check Status
  setInterval(checkStatus, 500);
}

// Pick and Show Random Word
function showWord() {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  // Make sure there is more time left in the game
  if (time > 0) {
    time--;
  } else if (time == 0) {
    // Game is over
    isPlaying = false;
  }
  // Display time left in UI
  timeDisplay.innerHTML = time;
}

// Check if the game is over, if so reset score
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}

// Start matching
function startMatch() {
  // If the wordInput word is a match
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // If the game is over, display 0 in the UI instead of -1
  if (score == -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Check if currentWord matches word input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = " ";
    return false;
  }
}
