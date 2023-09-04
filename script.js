let currentNumber = "";
let previousNumber = "";
let operator = "";

let displayValue = "";

let currentInput = document.getElementById('current-input');
let previousInput = document.getElementById('previous-input');

const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const equalBtn = document.getElementById('equal');
const delBtn = document.getElementById('del');

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        currentNumber += numberButtons[i].textContent;

        // update screen
        currentInput.textContent = currentNumber;

    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        operator = operatorButtons[i].textContent;

        // if operator pressed, put current input to second
        // input plus show the operator in second
        previousNumber = currentNumber;
        currentNumber = "";
        
        // update screen
        previousInput.textContent = previousNumber + operator;
        currentInput.textContent = currentNumber;
    });
}


equalBtn.addEventListener('click', () => {
    let result = operate(operator, previousNumber, currentNumber);

    // update display
    currentInput.textContent = result;
    previousInput.textContent = '';
});

delBtn.addEventListener('click', () => {
    del();
});

function del() {
    currentNumber = '';
    previousNumber = '';
    currentInput.textContent = '';
    previousInput.textContent = '';
}

function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}

function subtract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
}

function multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}

function divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
}

function operate(operator, a, b) {
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