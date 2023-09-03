let firstNumber = "";
let secondNumber = "";
let operator = "";

let displayValue = "";

let oneBtn = document.getElementById(1);
let twoBtn = document.getElementById(2);
let threeBtn = document.getElementById(3);
let fourBtn = document.getElementById(4);
let fiveBtn = document.getElementById(5);
let sixBtn = document.getElementById(6);
let sevenBtn = document.getElementById(7);
let eightBtn = document.getElementById(8);
let nineBtn = document.getElementById(9);
let zeroBtn = document.getElementById(0);
let equalBtn = document.getElementById("equal")
let userInput = document.getElementById('user-input');
let inputResult = document.getElementById('input-result');




let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    
    const numberInput = e.target.textContent;
    userInput.textContent = numberInput;
    console.log(e.target.textContent);

    displayValue += numberInput;

    inputResult.textContent = displayValue;
});

/*
oneBtn.onclick = () => {
    userInput.textContent = oneBtn.textContent;
};

twoBtn.onclick = () => {
    userInput.textContent = "2";
};

threeBtn.onclick = () => {
    userInput.textContent = "3";
};

fourBtn.onclick = () => {
    userInput.textContent = "4";
};

fiveBtn.onclick = () => {
    userInput.textContent = "5";
};

sixBtn.onclick = () => {
    userInput.textContent = "6";
};

sevenBtn.onclick = () => {
    userInput.textContent = "7";
};

eightBtn.onclick = () => {
    userInput.textContent = "8";
};

nineBtn.onclick = () => {
    userInput.textContent = "9";
};

zeroBtn.onclick = () => {
    userInput.textContent = "0";
};*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {

}