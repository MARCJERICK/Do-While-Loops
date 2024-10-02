// Importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();
//the correct pasword and the user password
let correctPassword = "Angcuteko";
let userPassword;
//do while loop
do {
    //asking the user to enter the password
    userPassword = prompt("Enter your password: ");
    //checking if the password is incorrect
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again");
    }
    //checking the password if correct
} while (userPassword !== correctPassword);

console.log("Access granted");
