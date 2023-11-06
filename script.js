let result = document.getElementById('result');
let currentInput = '';
let firstOperand = null;
let operator = null;

function appendToResult(value) {
  currentInput += value;
  result.value = currentInput;
}

function clearResult() {
  currentInput = '';
  firstOperand = null;
  operator = null;
  result.value = '';
}

function add() {
  firstOperand = currentInput;
  operator = '+';
  currentInput = '';
}

function subtract() {
  firstOperand = currentInput;
  operator = '-';
  currentInput = '';
}

function multiply() {
  firstOperand = currentInput;
  operator = '*';
  currentInput = '';
}

function divide() {
  firstOperand = currentInput;
  operator = '/';
  currentInput = '';
}

function calculateResult() {
  let secondOperand = currentInput;
  if (operator === '+') {
    currentInput = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === '-') {
    currentInput = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === '*') {
    currentInput = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === '/') {
    if (secondOperand === '0') {
      currentInput = "Error";
    } else {
      currentInput = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
  }
  result.value = currentInput;
}