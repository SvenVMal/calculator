let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentInput = document.getElementById('current-input');
const previousInput = document.getElementById('previous-input');

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalBtn = document.querySelector('.equal');
const delBtn = document.querySelector('.del');
const clearBtn = document.querySelector('.clear');


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        // append numbers
        if (numberButtons[i].textContent === '.' && currentNumber.includes('.')) {
            return;
        }
        currentNumber += numberButtons[i].textContent;
        
        // update screen
        currentInput.textContent = currentNumber;

    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {

        if (currentNumber === '') {
            return;
        }
        
        if (previousNumber !== ''){
            let result = operate(operator, previousNumber, currentNumber);
            previousNumber = result;
            operator = operatorButtons[i].textContent;
            currentNumber = '';
            previousInput.textContent = result + operator;
            currentInput.textContent = '';
            return;
            
        }
        
        // append operator
        operator = operatorButtons[i].textContent;
        previousNumber = currentNumber;
        currentNumber = "";
        
        // update screen
        previousInput.textContent = previousNumber + operator;
        currentInput.textContent = '';
    });
}

equalBtn.addEventListener('click', () => {
    
    let result = operate(operator, previousNumber, currentNumber);

    currentInput.textContent = result;
    previousInput.textContent = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
});

delBtn.addEventListener('click', () => {
    del();
});

clearBtn.addEventListener('click', () => {
    clear();
});

function del() {
    // should only delete first input
    currentNumber = currentNumber.slice(0, -1);
    currentInput.textContent = currentNumber;
}

function clear() {
    // should clear everything
    currentNumber = '';
    previousNumber = '';
    operator = '';
    currentInput.textContent = '';
    previousInput.textContent = '';
}

function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
}

function subtract(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a - b;
}

function multiply(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a * b;
}

function divide(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a / b;
}

function operate(operator, a, b) {
    if (a === '' || b === '') {
        return;
    }
    if (operator === '+') {
        return add(a, b);
    }

    if (operator === '-') {
        return subtract(a, b);
    }

    if (operator === '*') {
        return multiply(a, b);
    }

    if (operator === '/') {
        return divide(a, b);
    }
}