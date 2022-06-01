'use strict';
//Selection score elements
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const dice = document.querySelector('.img');
const playAgain = document.querySelector('.play-again');
const rollDice = document.querySelector('.roll-dice');
const holdDice = document.querySelector('.hold-dice');
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');
//Rolling Dice
let sum = 0;
let activePlayer = 0;
const scores = [0, 0];
rollDice.addEventListener('click', function () {
  const ranNumber = Number(Math.trunc(Math.random() * 6 + 1));
  dice.classList.remove('hidden');
  //Display Dice
  dice.src = `dice${ranNumber}.png`;

  if (ranNumber !== 1) {
    sum += ranNumber;
    document.querySelector('.current-score').textContent = sum;
  } else {
    sum = 0;
    document.querySelector('.current-score').textContent = sum;
  }
});
//play Again
playAgain.addEventListener('click', function () {
  const score = 0;
  document.querySelector('#current-score1').textContent = score;
  document.querySelector('#current-score2').textContent = score;
  score1.textContent = score;
  score2.textContent = score;
});
