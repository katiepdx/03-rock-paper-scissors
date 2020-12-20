// IMPORT MODULES under test here:
import { doesUserWin, getRandomThrow } from '../gameUtils.js'
const test = QUnit.test;

test('tests that the getRandomThrow function returns a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dataType = 'string'

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof (getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, dataType);
});

test('tests if user wins using -1 for a lose, 0 for a draw, and 1 for a win for PAPER scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersSelection1 = 'rock';
    const usersSelection2 = 'paper';
    const usersSelection3 = 'scissors';
    const computersSelection = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = doesUserWin(usersSelection1, computersSelection);
    const actual2 = doesUserWin(usersSelection2, computersSelection);
    const actual3 = doesUserWin(usersSelection3, computersSelection);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'lose');
    expect.equal(actual2, 'draw');
    expect.equal(actual3, 'win');
});

test('tests if user wins using -1 for a lose, 0 for a draw, and 1 for a win for ROCK scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersSelection1 = 'rock';
    const usersSelection2 = 'paper';
    const usersSelection3 = 'scissors';
    const computersSelection = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = doesUserWin(usersSelection1, computersSelection);
    const actual2 = doesUserWin(usersSelection2, computersSelection);
    const actual3 = doesUserWin(usersSelection3, computersSelection);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'draw');
    expect.equal(actual2, 'win');
    expect.equal(actual3, 'lose');
});

test('tests if user wins using -1 for a lose, 0 for a draw, and 1 for a win for SCISSORS scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersSelection1 = 'rock';
    const usersSelection2 = 'paper';
    const usersSelection3 = 'scissors';
    const computersSelection = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = doesUserWin(usersSelection1, computersSelection);
    const actual2 = doesUserWin(usersSelection2, computersSelection);
    const actual3 = doesUserWin(usersSelection3, computersSelection);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'win');
    expect.equal(actual2, 'lose');
    expect.equal(actual3, 'draw');
});
