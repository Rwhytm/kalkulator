const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecond: false,
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecond = false;
}

function inputDigit(digit) {
    calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll('.button');


for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay();
    })
}

function updateNumber() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}