// Exercise # 10
//After storing a number in a variable, this program creates a message through concatenating a string and variable and then prints the message.
let favnum = 1235
let message = "My enrolment number was " + favnum;
console.log(message);

//This program prints a name in lower, upper and title cases
let x = "Nadeem Chaudhary";
console.log(x.toLowerCase())
console.log(x.toUpperCase())
console.log(x.replace(/\b\w/g, (char) => char.toUpperCase()))