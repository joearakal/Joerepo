const http = require("http");
const { url } = require("inspector");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    }
    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log("listening on port 3000");

/*
// Create EventEmitter, listener that calls the logger class that has the listener and raises and event.
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Calls the event listener
logger.on("messageLogged", (args) => {
    console.log("Listener called",args);
});

logger.log("message");
*/