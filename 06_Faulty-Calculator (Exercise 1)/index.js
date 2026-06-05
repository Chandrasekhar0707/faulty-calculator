/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as followa:

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operation 10% of the times

*/

const prompt = require("prompt-sync")();
// input
let a = Number(prompt("Enter First Number: "))
let b = Number(prompt("Enter Second Number: "))
let ab = prompt("Enter operator (+, -, *, /): ")

// function
function calculate(a, b, ab) {
    let random = Math.random();

    // 10% faulty
    if (random < 0.1) {
        console.log("Faulty calculation ongoing");

        if(ab == "+") {
            return a - b;
        }
        else if (ab == "*") {
            return a + b;
        }
        else if (ab == "-") {
            return a / b;
        }
        else if (ab == "/") {
            return a ** b;
        }
        else {
            return "Invalid Operation"
        }
    }
    // Normal Calculation
    else {
        if(ab == "+") {
            return a+b;
        }
        else if(ab == "*") {
            return a*b;
        }
        else if (ab == "-") {
            return a-b;
        }
        else if(ab == "/") {
            return a/b;
        }
        else {
            return "Invalid Operation"
        }
        
    }
}

// O/P
let result = calculate(a,b,ab);
console.log("Result: ", result);