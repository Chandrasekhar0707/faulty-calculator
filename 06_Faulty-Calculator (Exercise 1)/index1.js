const prompt = require("prompt-sync")()
let a = Number(prompt("Enter first Number: "))
let b = Number(prompt("Enter second number: "))
let ab = prompt("Enter operator (+,-,*,/): ")

function calculate (a,b,ab) {
    let random = Math.random();

    if (random < 50.0) {
        console.log("Faulty Calc ongoing");

        if (ab == "+") {
            return a-b
        }
        else if (ab == "-") {
            return a+b
        }
        else if (ab == "*") {
            return a/b
        }
        else if (ab == "/") {
            return a**b
        }
        else {
            console.log("Invalid Operation")
        }
    }

    else {
        if (ab == "+") {
            return a+b
        }

        else if (ab == "-") {
            return a-b
        }

        else if (ab == "*") {
            return a*b
        }

        else if (ab == "/") {
            return a/b
        }

    }
}

result = calculate (a,b,ab)
console.log("Result: ", result)