import * as net from "net";
console.log("Logs from your program will appear here!");


const server: net.Server = net.createServer((connection: net.Socket) => {
    connection.on("data",(data)=>{
        console.log("recived the data :",JSON.stringify(data.toString()));
        connection.write("+PONG\r\n");
    })
});

server.listen(6379, "127.0.0.1");
