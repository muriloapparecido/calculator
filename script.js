let displayValue = ""; 
let equationDisplay = ""; 
let num1 = null, num2 = null; 
let operator = " ";

const add = (a,b) => a + b; 
const sub = (a,b) => a - b; 
const mult = (a,b) => a * b; 
const div = (a,b) => (b !== 0 ? a / b : "Error: Division by zero");; 

function operate(operator, num1, num2) {
    switch(operator){
        case '+': return add(num1, num2); 
        case '−': return sub(num1, num2); 
        case 'x': return mult(num1, num2); 
        case '÷': return div(num1, num2); 
    }
}

function updateDisplay(){
    document.querySelector("#equation").textContent = equationDisplay;
}

function handleNumberClick(event) {
    if(operator === ' '){
        displayValue += event.target.textContent; 
        num1 = parseFloat(displayValue);
        equationDisplay = num1
    } else {
        if (num2 === null) displayValue = "";
        displayValue += event.target.textContent; 
        num2 = parseFloat(displayValue); 
        equationDisplay += " " + num2; 
    }
    updateDisplay();
}

function handleOperatorClick(event) {
    if(num1 != null && operator === ' ') {
        operator = event.target.textContent; 
        equationDisplay =  displayValue + " " + operator;
        displayValue = ""; 
    }
    updateDisplay();
}

function handleClear(event) {
    displayValue = "";
    equationDisplay = ""; 
    num1 = null;
    num2 = null;
    operator = ' ';
    updateDisplay();
}

function handleEqual(event) {
    if (num1 != null && num2 != null && operator != ' '){
        let result = operate(operator, num1, num2); 
        equationDisplay =  num1 + " " + operator + " " + num2 + " = " + result;

        num1 = result; 
        num2 = null; 
        operator = ''; 
    }
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