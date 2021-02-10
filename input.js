// Stores the active TCP connection object.
let connection = require('./play');
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('Move: up');
  }
  if (key === 'a') {
    console.log('Move: left');
  }
  if (key === 's') {
    console.log('Move: down');
  }
  if (key === 'd') {
    console.log('Move: right');
  }
};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};