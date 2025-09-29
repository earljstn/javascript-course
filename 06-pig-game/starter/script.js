'use strict';

console.log('Pig Game Ready !');

// Game state variables
let scores, currentScore, activePlayer, playing;

// Select player 0 (player 1)
const player0El = document.querySelector('.player--0');

// Select player 1 (player 2)
const player1El = document.querySelector('.player--1');

// Select score element
const score0El = document.querySelector('#score--0');

// Select score 1 element
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

// Game initialization function

const init = function () {
  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;

  score0El.textContent = 0;

  score1El.textContent = 0;

  current0El.textContent = 0;

  current1El.textContent = 0;

  diceEl.classList.add('hidden');
};

init();

// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // add dice logic
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;

      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
