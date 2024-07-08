const characters = [
  { name: 'Mario', image: 'mario.png', correctAnswers: ['Mario', 'Super Mario'] },
  { name: 'Luigi', image: 'luigi.png', correctAnswers: ['Luigi'] },
  { name: 'Pikachu', image: 'pikachu.png', correctAnswers: ['Pikachu'] },
  { name: 'Peach', image: 'peach.png', correctAnswers: ['Peach', 'Princess Peach'] },
  { name: 'Bowser', image: 'bowser.png', correctAnswers: ['Bowser'] },
  { name: 'Daisy', image: 'daisy.png', correctAnswers: ['Daisy', 'Princess Daisy'] },
  { name: 'Donkey Kong', image: 'donkey-kong.png', correctAnswers: ['Donkey Kong', 'DK'] },
  { name: 'Yoshi', image: 'yoshi.png', correctAnswers: ['Yoshi'] },
  { name: 'Rosalina', image: 'rosalina.png', correctAnswers: ['Rosalina', 'Princess Rosalina'] },
  { name: 'Captain Falcon', image: 'captain-falcon.png', correctAnswers: ['Captain Falcon', 'Falcon'] },
  { name: 'Fox McCloud', image: 'fox-mccloud.png', correctAnswers: ['Fox', 'Fox McCloud'] },
  { name: 'Jigglypuff', image: 'jigglypuff.png', correctAnswers: ['Jigglypuff'] },
  { name: 'Kirby', image: 'kirby.png', correctAnswers: ['Kirby'] },
  { name: 'Link', image: 'link.png', correctAnswers: ['Link'] },
  { name: 'Ness', image: 'ness.png', correctAnswers: ['Ness', 'Sans'] },
  { name: 'Samus', image: 'samus.png', correctAnswers: ['Samus'] },
  { name: 'Brock', image: 'brock.png', correctAnswers: ['Brock'] },
  { name: 'Misty', image: 'misty.png', correctAnswers: ['Misty'] },
  { name: 'Lt. Surge', image: 'lt-surge.png', correctAnswers: ['Surge', 'Lt Surge', 'Lt. Surge'] },
  { name: 'Erika', image: 'erika.png', correctAnswers: ['Erika'] },
  { name: 'Koga', image: 'koga.png', correctAnswers: ['Koga'] },
  { name: 'Sabrina', image: 'sabrina.png', correctAnswers: ['Sabrina'] },
  { name: 'Blaine', image: 'blaine.png', correctAnswers: ['Blaine'] },
  { name: 'Giovanni', image: 'giovanni.png', correctAnswers: ['Giovanni'] },
  { name: 'Sonic', image: 'sonic.png', correctAnswers: ['Sonic', 'Sonic the Hedgehog'] },
  { name: 'Tails', image: 'tails.png', correctAnswers: ['Tails', 'Tails the Fox', 'Miles Prower'] },
  { name: 'Knuckles', image: 'knuckles.png', correctAnswers: ['Knuckles', 'Knuckles the Echidna'] },
  { name: 'Amy', image: 'amy-rose.png', correctAnswers: ['Amy', 'Amy Rose'] },
  { name: 'Eggman', image: 'eggman.png', correctAnswers: ['Eggman', 'Dr Eggman', 'Dr. Eggman', 'Doctor Eggman', 'Robotnik', 'Dr Robotnik', 'Dr. Robotnik', 'Doctor Robotnik', 'Dr Ivo Robotnik', 'Dr. Ivo Robotnik', 'Doctor Ivo Robotnik', 'Ivo Robotnik'] },
  { name: 'Shadow', image: 'shadow.png', correctAnswers: ['Shadow'] },
  { name: 'Metal Sonic', image: 'metal-sonic.png', correctAnswers: ['Metal', 'Metal Sonic'] },
  { name: 'Charmy', image: 'charmy-bee.png', correctAnswers: ['Charmy', 'Charmy Bee'] },
  { name: 'Espio', image: 'espio.png', correctAnswers: ['Espio', 'Espio the Chameleon'] },
  { name: 'Vector', image: 'vector.png', correctAnswers: ['Vector', 'Vector the Crocodile'] },
  { name: 'Fang', image: 'fang.png', correctAnswers: ['Fang', 'Fang the Hunter', 'Fang the Sniper', 'Nack', 'Nack the Weasel'] },
  { name: 'Trip', image: 'trip.png', correctAnswers: ['Trip', 'Trip the Sungazer'] },
  { name: 'Ash', image: 'ash-ketchum.png', correctAnswers: ['Ash', 'Ash Ketchum'] },
  { name: 'Big', image: 'big.png', correctAnswers: ['Big', 'Big the Cat'] },
  { name: 'Blaze', image: 'blaze.png', correctAnswers: ['Blaze', 'Blaze the Cat'] },
  { name: 'Cream', image: 'cream.png', correctAnswers: ['Cream', 'Cream the Rabbit'] },
  { name: 'Cubot', image: 'cubot.png', correctAnswers: ['Cubot'] },
  { name: 'Eggman Nega', image: 'eggman-nega.png', correctAnswers: ['Eggman Nega'] },
  { name: 'Isabelle', image: 'isabelle.png', correctAnswers: ['Isabelle'] },
  { name: 'Jet', image: 'jet.png', correctAnswers: ['Jet', 'Jet the Hawk'] },
  { name: 'K. K. Slider', image: 'k-k-slider.png', correctAnswers: ['K. K. Slider', 'K K Slider', 'KK Slider', 'K.K.Slider'] },
  { name: 'Mighty', image: 'mighty.png', correctAnswers: ['Mighty', 'Mighty the Armadillo'] },
  { name: 'Orbot', image: 'orbot.png', correctAnswers: ['Orbot'] },
  { name: 'Ray', image: 'ray.png', correctAnswers: ['Ray', 'Ray the Flying Squirrel'] },
  { name: 'Silver', image: 'silver.png', correctAnswers: ['Silver'] },
  { name: 'Storm', image: 'storm.png', correctAnswers: ['Storm', 'Storm the Albatross'] },
  { name: 'Tikal', image: 'tikal.png', correctAnswers: ['Tikal', 'Tikal the Echidna'] },
  { name: 'Wave', image: 'wave.png', correctAnswers: ['Wave', 'Wave the Swallow'] },
  { name: 'Villager', image: 'villager.png', correctAnswers: ['Villager'] },
  { name: 'Falco', image: 'falco.png', correctAnswers: ['Falco', 'Falco Lombardi'] },
  { name: 'Dedede', image: 'king-dedede.png', correctAnswers: ['King Dedede', 'Dedede'] },
  { name: 'Meta Knight', image: 'meta-knight.png', correctAnswers: ['Meta Knight'] },
  { name: 'Dixie Kong', image: 'dixie-kong.png', correctAnswers: ['Dixie', 'Dixie Kong'] },
  { name: 'Tom Nook', image: 'tom-nook.png', correctAnswers: ['Tom Nook', 'Tom'] },
  { name: 'Zelda', image: 'zelda.png', correctAnswers: ['Zelda', 'Princess Zelda'] },
  { name: 'Ganondorf', image: 'ganondorf.png', correctAnswers: ['Ganondorf', 'Ganon'] },
  { name: 'Steve', image: 'steve.png', correctAnswers: ['Steve'] },
  { name: 'Alex', image: 'alex.png', correctAnswers: ['Alex'] },
  { name: 'Waluigi', image: 'waluigi.png', correctAnswers: ['Waluigi'] },
  { name: 'Homer', image: 'homer.png', correctAnswers: ['Homer', 'Homer Simpson'] },
  { name: 'Marge', image: 'marge.png', correctAnswers: ['Marge', 'Marge Simpson'] },
  { name: 'Bart', image: 'bart.png', correctAnswers: ['Bart', 'Bart Simpson'] },
  { name: 'Lisa', image: 'lisa.png', correctAnswers: ['Lisa', 'Lisa Simpson'] },
  { name: 'Maggie', image: 'maggie.png', correctAnswers: ['Maggie'] },
  { name: 'Toadette', image: 'toadette.png', correctAnswers: ['Toadette'] },
  { name: 'Toadsworth', image: 'toadsworth.png', correctAnswers: ['Toadsworth'] },
  { name: 'Goomba', image: 'goomba.PNG', correctAnswers: ['Goomba'] },
  { name: 'Piranha Plant', image: 'piranha-plant.png', correctAnswers: ['Piranha Plant'] },
  { name: 'King K Rool', image: 'king-k-rool.png', correctAnswers: ['King K. Rool', 'King K Rool'] },

// Add more characters as needed

];

const characterImage = document.getElementById('character');
const guessInput = document.getElementById('guess');
const resultText = document.getElementById('result');
const scoreValue = document.getElementById('score-value');
const timerDisplay = document.getElementById('time-left');
const modeSelection = document.querySelector('.mode-selection');
const timeLimitInput = document.getElementById('time-limit-input');
const gameInterface = document.getElementById('game-interface');

let randomCharacter;
let score = 0;
let timerInterval;
let timerDuration;

function startGame(mode) {
  if (mode === 'casual') {
    startCasualGame();
  } else if (mode === 'timed') {
    modeSelection.style.display = 'none';
    timeLimitInput.style.display = 'block';
  }
}

function showTimeLimitInput() {
  modeSelection.style.display = 'none';
  timeLimitInput.style.display = 'block';
}

function startTimedGame() {
  timerDuration = parseInt(document.getElementById('time-limit').value) * 1000; // Convert seconds to milliseconds
  timeLimitInput.style.display = 'none';
  gameInterface.style.display = 'block';

  randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  characterImage.src = randomCharacter.image;

  startTimer();
}

function startCasualGame() {
  modeSelection.style.display = 'none';
  gameInterface.style.display = 'block';

  randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  characterImage.src = randomCharacter.image;
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerDuration -= 1000; // Decrease timer by 1 second
    updateTimerDisplay();
    if (timerDuration <= 0) {
      clearInterval(timerInterval); // Stop the timer when it reaches zero
      // Add logic to handle game over when timer runs out
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerDuration / 60000);
  const seconds = Math.floor((timerDuration % 60000) / 1000);
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function checkGuess() {
  const userGuess = guessInput.value.toLowerCase().trim();
  const correctAnswers = randomCharacter.correctAnswers.map(answer => answer.toLowerCase());

  if (correctAnswers.includes(userGuess)) {
    resultText.textContent = "Correct!";
    score++;
    scoreValue.textContent = score;
  } else {
    resultText.textContent = "Incorrect";
  }

  // Clear guess input
  guessInput.value = '';

  // Hide the result text after 2 seconds
  setTimeout(() => {
    resultText.textContent = '';
  }, 2000);

  randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  characterImage.src = randomCharacter.image;

  if (timerDuration && timerInterval) {
    clearInterval(timerInterval);
    startTimer();
  }
}

// Function to handle returning to game from credits page
function returnToGame() {
  window.location.href = "index.html";
}

function viewAllCharacters() {
  // Redirect to the page listing all characters
  window.location.href = "all_characters.html";
}
