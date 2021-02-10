/**
 * Establishes connection with the game server
 */

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Message from Server: ', data);
  });

  conn.on('connect', () => {
    console.log('Succesfully connected to game server: Welcome to Snake!');
    conn.write('Name: STO');
  });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 1000);

  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 2000);

  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 3000);

  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 4000);
  // });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 1000);
  // });
  
  return conn;
};

module.exports = {connect};