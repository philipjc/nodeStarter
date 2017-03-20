import WebSocket from 'ws';
import http from 'http';

module.exports = websocket => {

  const server = new http.createServer(module.app);
  const wss = new WebSocket.Server({server});

  wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
      console.log(`received ${msg}`);
    });

    ws.send('something');
  });

}