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

    conn.write('Move: up');
    
    setTimeout(() => {
      conn.write('Move: left');
    }, 1000);

    setTimeout(() => {
      conn.write('Move: left');
    }, 2000);

    setTimeout(() => {
      conn.write('Move: up');
    }, 3000);
  });
  
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 1000);
  // });
  
  return conn;
};

module.exports = connect;