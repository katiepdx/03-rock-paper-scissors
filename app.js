// import functions and grab DOM elements
import { getRandomThrow, doesUserWin } from './gameUtils.js';

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

  usersChoice = inputChecked.id

  const result = doesUserWin(usersChoice, computersChoice);

  if (result === 'win') wins++;
  if (result === 'draw') draws++;
  if (result === 'lose') loses++;
});
