const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// draw an empty board
console.log(' | | ');
console.log('  -----');
console.log('   | | ');
console.log('  -----');
console.log('   | | ');

// prompt for answer
console.log('Wanna play?');
rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'yes':
      console.log('awesome!');
      break;
    case 'no':
      rl.close();
    default:
      console.log('Wanna play?');
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});