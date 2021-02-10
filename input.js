/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('up');
  }
  if (key === 'a') {
    console.log('left');
  }
  if (key === 's') {
    console.log('down');
  }
  if (key === 'd') {
    console.log('right');
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};