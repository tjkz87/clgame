const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let state = 'newgame';

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
  if (state === 'newgame') {
    switch(line.trim()) {
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
  } else if (state === 'p1turn') {
    // save player's response
    console.log('Player 2, select a cell. Enter column and row number:');
    state = 'p2turn';
  } else if (state === 'p2turn') {
    // save player's response
    console.log('Player 1, select a cell. Enter column and row number:');
    state = 'p1turn';
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});