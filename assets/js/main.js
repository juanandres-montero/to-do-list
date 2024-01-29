// Get the display element
const display = document.querySelector('.display-body__text');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

function numberClicked(number) {
    if (currentOperator) {
        secondOperand += number;
    } else {
        firstOperand += number;
    }
    display.textContent = firstOperand + (currentOperator || '') + secondOperand;
}

function operatorClicked(operator) {
    currentOperator = operator;
    display.textContent = firstOperand + currentOperator;
}

function equalsClicked() {
    let result;
    if (currentOperator === '+') {
        result = Number(firstOperand) + Number(secondOperand);
    } else if (currentOperator === '-') {
        result = Number(firstOperand) - Number(secondOperand);
    } else if (currentOperator === '*') {
        result = Number(firstOperand) * Number(secondOperand);
    } else if (currentOperator === '/') {
        result = Number(firstOperand) / Number(secondOperand);
    }
    result = Number(result.toFixed(4));
    display.textContent = result;
    firstOperand = result;
    secondOperand = '';
    currentOperator = null;
}

function resetCalculator() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    display.textContent = '';
}

function deleteClicked() {
    if (secondOperand !== '') {
        secondOperand = secondOperand.slice(0, -1);
    } else if (currentOperator) {
        currentOperator = null;
    } else {
        firstOperand = firstOperand.slice(0, -1);
    }
    display.textContent = firstOperand + (currentOperator || '') + secondOperand;
}

// Event listeners
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => numberClicked(button.textContent));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => operatorClicked(button.textContent));
});

document.querySelector('.equals').addEventListener('click', equalsClicked);

document.querySelector('.reset').addEventListener('click', resetCalculator);

document.querySelector('.delete').addEventListener('click', deleteClicked);
