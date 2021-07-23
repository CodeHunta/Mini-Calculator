let firstName = prompt("What is the first number?")
let secondName = prompt("What is the second number?")

let num1 = parseInt(firstName)
let num2 = parseInt(secondName)

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    addNumbers = num1 + num2
    sumEl.textContent = "Answer: " + addNumbers
}

function minus() {
    minusNumbers = num1 - num2
    sumEl.textContent = "Answer: " + minusNumbers
}

function divide() {
    divideNumbers = num1 / num2
    sumEl.textContent = "Answer: " + divideNumbers
}

function multiply() {
    multiplyNumbers = num1 * num2
    sumEl.textContent = "Answer: " + multiplyNumbers
}