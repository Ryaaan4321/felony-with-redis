import * as net from "net";
class RedisTestClient {
  private client: net.Socket;
  constructor(port: number = 6379, host: string = "127.0.0.1") {
    this.client = net.createConnection({ port, host }, () => {
      console.log(`you are ready to rock and roll at  ${host}:${port}`);
    });
    this.client.on("data", (data) => {
      console.log("that's what he said: ", data.toString());
    });

    this.client.on("end", () => {
      console.log("we are done here!");
    });
  }
  send(command: string) {
    console.log(`sending the data to the server: ${JSON.stringify(command)}`);
    this.client.write(command + "\r\n");
  }
  close() {
    this.client.end();
  }
}

(async () => {
  const client = new RedisTestClient();
  setTimeout(() => client.send("PING"), 500);
  setTimeout(() => client.close(), 3000);
})();
