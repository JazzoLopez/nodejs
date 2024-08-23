const http = require("node:http");
const { findAvailablePort } = require("./free-port");

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello World");
});

findAvailablePort(5000).then((port) => {
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})