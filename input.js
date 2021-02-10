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
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  // period
  if (key === '\u002e') {
    connection.write('Say: Boo');
  }
  // backslash
  if (key === '\u002f') {
    connection.write('Say: Weeee');
  }
  // space
  if (key === '\u0020') {
    connection.write('Say: Merry Christmas!');
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