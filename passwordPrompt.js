const ps = require("prompt-sync");
const prompt = ps();

let correctPassword = "Angcuteko";
let userPassword;

do {
    userPassword = prompt("Enter your password: ");
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again");
    }
} while (userPassword !== correctPassword);

console.log("Access granted");
