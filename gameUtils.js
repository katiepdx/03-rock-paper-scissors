export const doesUserWin = (usersSelection, computersSelection) => {
    // TIE
    if (usersSelection === computersSelection) return 0;

    // LOSE
    if (usersSelection === 'rock' && computersSelection === 'paper') return -1;
    if (usersSelection === 'paper' && computersSelection === 'scissors') return -1;
    if (usersSelection === 'scissors' && computersSelection === 'rock') return -1;

    // WIN
    if (usersSelection === 'rock' && computersSelection === 'scissors') return 1;
    if (usersSelection === 'paper' && computersSelection === 'rock') return 1;
    if (usersSelection === 'scissors' && computersSelection === 'paper') return 1;
};
