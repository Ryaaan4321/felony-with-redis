import * as net from "net";
const client = net.createConnection({ port: 6379, host: "127.0.0.1" }, () => {
    console.log("Connected to Redis");
    client.write("PING\r\n");
    // client.write("*2\r\n$3\r\nGET\r\n$3\r\nkey\r\n");
    // client.write("*2\r\n$3\r\nGET\r\n$3\r\nf1\r\n");
    client.write("*3\r\n$3\r\nSET\r\n$2\r\nf2\r\n$5\r\n12344\r\n");
});
client.on("data", (data) => {
    console.log("and she said :", data.toString());
});
