function add(num1,num2) {
	return num1+num2;
}

function subtract(num1,num2) {
	return num1-num2;
}

function multiply(num1,num2) {
	return num1*num2;
}

function divide(num1,num2) {
	if(num2 === 0) { alert("Cannot divide by 0"); clearDisplay(); return 0;}
	console.log((num1/num2).toFixed(3));
	return (num1/num2).toFixed(3);
}

function operate(operator, num1, num2) {
	if(operator === 'add') {
		return add(Number(num1),Number(num2));
	}
	else if(operator === 'subtract') {
		return subtract(Number(num1),Number(num2));
	}
	else if(operator === 'multiply') {
		return multiply(Number(num1),Number(num2));
	}
	else if(operator === 'divide') {
		return divide(Number(num1),Number(num2));
	}
}

function updateDisplay(content) {
	display.textContent += content;
}

function clearDisplay() {
	display.textContent = '';
	temporaryNum = '';
	num1 = '';
	num2 = '';
	chainActive = false;
}

function deleteDisplay() {
	display.textContent = display.textContent.slice(0,-1);
	temporaryNum = temporaryNum.slice(0,-1);
}

let temporaryNum = '';
let num1 = '';
let num2 = '';
let result;
let chainActive = false;
let chosenOperatorName;

const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const number0 = document.querySelector('#number-0');
const number1 = document.querySelector('#number-1');
const number2 = document.querySelector('#number-2');
const number3 = document.querySelector('#number-3');
const number4 = document.querySelector('#number-4');
const number5 = document.querySelector('#number-5');
const number6 = document.querySelector('#number-6');
const number7 = document.querySelector('#number-7');
const number8 = document.querySelector('#number-8');
const number9 = document.querySelector('#number-9');
const dotButton = document.querySelector('#dot');
const operatorAdd = document.querySelector('#operator-add');
const operatorSubtract = document.querySelector('#operator-subtract');
const operatorDivide = document.querySelector('#operator-divide');
const operatorMultiply = document.querySelector('#operator-multiply');
const equalButton = document.querySelector('#operate');

const display = document.querySelector('.display');

const numberButtons = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9];
const operatorButtons = [operatorAdd, operatorSubtract, operatorMultiply, operatorDivide];

clearButton.addEventListener('click', () => clearDisplay());
deleteButton.addEventListener('click', () => deleteDisplay());

numberButtons.forEach(button => button.addEventListener('click', () => {
	updateDisplay(button.textContent);
	temporaryNum += button.textContent;
}));

operatorButtons.forEach(button => button.addEventListener('click', () => {
	updateDisplay(button.textContent);

	if (chainActive === true){
		chosenOperatorName = button.id.split('-')[1];
		num2 = temporaryNum;
		num1 = operate(previousOperatorName, num1, num2);
		previousOperatorName = chosenOperatorName;
	}
	else {
		num1 = temporaryNum;
		previousOperatorName = button.id.split('-')[1];
		chosenOperatorName = previousOperatorName;
	}

	temporaryNum = '';
	chainActive = true;
}));

equalButton.addEventListener('click', () => {
	if(num1.length === 0 && num1.length === 0) {
		result = 0;
	}
	else {
		num2 = temporaryNum;
		result = operate(chosenOperatorName,num1,num2);	
	}
	clearDisplay();
	temporaryNum = result.toString();
	display.textContent = result;
})

