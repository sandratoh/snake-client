/**
 * Establishes connection with the game server
 */
const connect = require('./client');

console.log('Connecting ...');

let client = connect();

client.on('data', (data) => {
  console.log('Message from Server: ', data);
});
