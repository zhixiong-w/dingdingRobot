var WebSocket = require('ws').WebSocket
const ws = new WebSocket('ws://172.10.3.126:6080')

ws.onopen = function (e) {
  //成功连接服务器回调
  console.log('客户端（client）：与服务器的连接已打开')
  ws.send('client connected')
}


const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 8806})

wss.on('connection', (conn) => {
  conn.on('message', (data)=> {
    const msg = data.toString('utf-8')
    ws.send(msg)
  })
})