// import functions and grab DOM elements
import { getRandomThrow, doesUserWin } from './gameUtils.js';

const usersWins = document.querySelector('.wins');
const usersLoses = document.querySelector('.loses');
const usersDraws = document.querySelector('.draws');
const usersSelection = document.querySelector('.users-choice');
const computersSelection = document.querySelector('.computers-choice');
const button = document.querySelector('.button');

// initialize state
let computersChoice;
let usersChoice;
let wins = 0;
let loses = 0;
let draws = 0;

// set event listeners to update state and DOM
button.addEventListener('click', (e) => {
  e.preventDefault();

  computersChoice = getRandomThrow();

  const inputChecked = document.querySelector('input:checked');

  if (!inputChecked) return alert('Please make a selection');

  usersChoice = inputChecked.id;

  const result = doesUserWin(usersChoice, computersChoice);

  if (result === 'win') wins++;
  if (result === 'draw') draws++;
  if (result === 'lose') loses++;

  usersWins.textContent = wins;
  usersLoses.textContent = loses;
  usersDraws.textContent = draws;
  usersSelection.textContent = usersChoice;
  computersSelection.textContent = computersChoice;
});
