const WebSocket = require('ws');
let players = [];
const wss = new WebSocket.Server({ port:5500 });

wss.on('connection', ws => {
    console.log('server logged a connection!');
    ws.on('message',data => {
        console.log(`Client has sent us: ${data}`);
        ws.send(data.toUpperCase());
    });
    ws.on('close', () => {
        console.log('Client has disconnected!');
    });
});