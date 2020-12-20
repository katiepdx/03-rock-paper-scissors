export const getRandomThrow = () => {
    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) return 'rock';
    if (randomNumber === 2) return 'paper';
    if (randomNumber === 3) return 'scissors';
};

export const doesUserWin = (usersSelection, computersSelection) => {
    // TIE
    if (usersSelection === computersSelection) return 'draw';

    // LOSE
    if (usersSelection === 'rock' && computersSelection === 'paper') return 'lose';
    if (usersSelection === 'paper' && computersSelection === 'scissors') return 'lose';
    if (usersSelection === 'scissors' && computersSelection === 'rock') return 'lose';

    // WIN
    if (usersSelection === 'rock' && computersSelection === 'scissors') return 'win';
    if (usersSelection === 'paper' && computersSelection === 'rock') return 'win';
    if (usersSelection === 'scissors' && computersSelection === 'paper') return 'win';
};
