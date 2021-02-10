const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Succesfully connected to game server: Welcome to Snake!');
    conn.write('Name: STO');
  });

  return conn;
};

module.exports = connect;