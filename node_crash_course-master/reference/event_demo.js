const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();
console.log(myEmitter);
// Event listener
myEmitter.on("nameOfTheEvent", () => console.log("Event Fired!"));

// Init event
myEmitter.emit("nameOfTheEvent");
myEmitter.emit("nameOfTheEvent");
myEmitter.emit("nameOfTheEvent");
myEmitter.emit("nameOfTheEvent");
