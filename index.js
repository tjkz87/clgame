const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let state = 'newgame';

let matrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

rl.prompt();

// draw an empty board
console.log(' | | ');
console.log('  -----');
console.log('   | | ');
console.log('  -----');
console.log('   | | ');

// prompt for answer
console.log('Wanna play?');

rl.on('line', (line) => {
  const response = line.trim();
  if (state === 'newgame') {
    switch(response) {
      case 'yes':
        console.log('awesome!');
        console.log('Player 1, select a cell. Enter column and row number:');
        state = 'p1turn';
        break;
      case 'no':
        rl.close();
      default:
        console.log('Wanna play?');
        break;
    }
  } else {
    const turn = response.split(' ');
    if (state === 'p1turn') {
      // save player's response
      matrix[Number(turn[0]), Number(turn[1])] = 'X';
      // TODO: re-draw board
      // if wins set state to 'gameover'
      console.log('Player 2, select a cell. Enter column and row number:');
      state = 'p2turn';
    } else if (state === 'p2turn') {
      // save player's response
      matrix[Number(turn[0]), Number(turn[1])] = 'O';
      // TODO: re-draw board
      // if wins set state to 'gameover'
      console.log('Player 1, select a cell. Enter column and row number:');
      state = 'p1turn';
    } else if (state === 'gameover') {
      // announce winner
      // promp for a new game
      // set state to 'newgame'
    }
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});