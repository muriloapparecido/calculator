let displayValue = ""; 
let equationDisplay = ""; 
let num1 = null, num2 = null; 
let operator = null;
let resultDisplayed = false;

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
    const digit = event.target.textContent;

    if (resultDisplayed) {
        displayValue = digit;
        equationDisplay = digit;
        num1 = null;
        num2 = null;
        operator = null;
        resultDisplayed = false;
        updateDisplay();
        return;
    }

    if (operator === null) {
        if(num1 === null){ 
            num1 = parseInt(digit); 
            displayValue = digit;
            equationDisplay = displayValue;
        } else {
            num1 = num1 * 10 + parseInt(digit); 
            displayValue += digit;
            equationDisplay = displayValue; 
        }
    } else {
        num2 = num2 ? num2 * 10 + parseInt(digit) : parseInt(digit);  
        displayValue += digit;  
        equationDisplay = `${num1} ${operator} ${displayValue}`; 
    }

    updateDisplay();
}

function handleOperatorClick(event) {
    if (displayValue !== "") {
        num2 = parseFloat(displayValue);  
    }

    operator = event.target.textContent;  
    displayValue = "";  
    equationDisplay = `${num1} ${operator}`;  
    updateDisplay();
}

function handleClear(event) {
    displayValue = "";
    equationDisplay = ""; 
    num1 = null;
    num2 = null;
    operator = null;
    resultDisplayed = false; 
    updateDisplay();
}

function handleEqual(event) {
    if (displayValue !== "") {
        num2 = parseFloat(displayValue);
    }
    
    if (num1 != null && num2 != null && operator != null){
        let result = operate(operator, num1, num2); 
        equationDisplay = `${num1} ${operator} ${num2} = ${result}`;

        num1 = result; 
        num2 = null; 
        operator = null;
        displayValue = "";  
        resultDisplayed = true; 
        updateDisplay();
    }
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