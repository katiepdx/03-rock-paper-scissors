// IMPORT MODULES under test here:
import { doesUserWin } from '../gameUtils.js'
const test = QUnit.test;

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
    expect.equal(actual1, -1);
    expect.equal(actual2, 0);
    expect.equal(actual3, 1);
});
