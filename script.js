let displayValue = ""; 
let num1, num2 = 0; 
let operator = '';

const add = (a,b) => a+b; 

const sub = (a,b) => a-b; 

const mult = (a,b) => a*b; 

const div = (a,b) => (b !== 0 ? a / b : "Error: Division by zero");; 

function operate(operator, num1, num2) {
    switch(operator){
        case '+':
            add(num1, num2); 
        case '-':
            sub(num1, num2); 
        case '*':
            mult(num1, num2); 
        case '/': 
            div(num1, num2); 
    }
}

function updateDisplay(){
    document.querySelector("#display").textContent = displayValue;
}

function handleNumberClick(event) {
    displayValue += " " + event.target.textContent;
    updateDisplay();
}

function handleOperatorClick(event) {
    displayValue += " " + event.target.textContent;
    updateDisplay();
}

function handleClear(event) {
    displayValue = "";
    updateDisplay();
}

function handleEqual(event) {
    displayValue += " " + event.target.textContent;
    updateDisplay();
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", handleNumberClick);
})

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", handleOperatorClick);
})

document.querySelectorAll(".clear").forEach(button => {
    button.addEventListener("click", handleClear);
})
document.querySelectorAll(".equal").forEach(button => {
    button.addEventListener("click", handleEqual);
})