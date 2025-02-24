// Type your code below this line!

const ps = require("prompt-sync");
const prompt = ps();

function Journey(start, end) {
    this.start = start;
    this.end = end;
}

const start = prompt("Donde inicio tu viaje?");
const end = prompt("Donde termino tu viaje?");

// Type your code above this line!

const travel = new Journey(start, end)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")