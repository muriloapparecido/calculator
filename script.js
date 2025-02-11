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