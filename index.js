const http = require("http");
//3rd party module ws
const webSocket = require ("ws");

//creating server

const server = http.createServer((req,res)=>{
    res.end("connected")
})

const webSocketServer = new webSocket.Server({server})


webSocketServer.on("headers",(headers, req)=>console.log(headers));

webSocketServer.on("connection",(ws, req)=>{
    console.log(req)
    //send message when anyone connects
ws.send("welcome to the mancave")

ws.on("message",(msg)=>{
    console.log(msg)
})
});
//starting server on 8000 dont ask why!!

server.listen(8000)