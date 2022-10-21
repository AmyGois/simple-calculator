/* Buttons and display paragraphs */

const display1 = document.querySelector('#display-1');
const display2 = document.querySelector('#display-2');

const clearBtn = document.querySelector('#clearBtn');
const backspaceBtn = document.querySelector('#backspaceBtn');

const exponentiateBtn = document.querySelector('#exponentiateBtn');
const divideBtn = document.querySelector('#divideBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const addBtn = document.querySelector('#addBtn');

const operatorBtns = document.querySelectorAll('.greenBtn');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');

const dotBtn = document.querySelector('#dotBtn');

const equalsBtn = document.querySelector('#equalsBtn');

/* Other variables */

let firstNum = 0;
let secondNum = 0;
let operation = '';
let numbersArray = [];

/* F1 - Maths functions */

function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtractNums(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiplyNums(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divideNums(firstNum, secondNum) {
    if(secondNum === 0) {
        return 'NOPE! Can\'t divide by 0';
    }
    return firstNum / secondNum;
};

function exponentiateNums(firstNum, secondNum) {
    return firstNum ** secondNum;
};

/* F2 - Perform selected operation on selected numbers */

function operate(operation, firstNum, secondNum) {

    switch(operation) {
        case 'add':
            return addNums(firstNum, secondNum);
            break;

        case 'subtract':
            return subtractNums(firstNum, secondNum);
            break;
        
        case 'multiply':
            return multiplyNums(firstNum, secondNum);
            break;
            
        case 'divide':
            return divideNums(firstNum, secondNum);
            break;

        case 'exponentiate':
            return exponentiateNums(firstNum, secondNum);
            break;
    };
};

/* Add a number to numbers array (to send to the operations functions) */

function sendToNumbersArray() {
    numbersArray.push(display2.textContent);
}

/* Add numbers to the operation */

function appendNumber(num) {
    if(display2.textContent === '+' || display2.textContent === '-' || display2.textContent === '÷' || display2.textContent === 'x' || display2.textContent === '^') {
        display1.textContent += display2.textContent;
        display2.textContent = '';
    }

    switch (num) {
        case 0:
            display2.textContent += '0';
            break;
        case 1:
            display2.textContent += '1';
            break;
        case 2:
            display2.textContent += '2';
            break;
        case 3:
            display2.textContent += '3';
            break;
        case 4:
            display2.textContent += '4';
            break;
        case 5:
            display2.textContent += '5';
            break;
        case 6:
            display2.textContent += '6';
            break;
        case 7:
            display2.textContent += '7';
            break;
        case 8:
            display2.textContent += '8';
            break;
        case 9:
            display2.textContent += '9';
            break;
        case '.':
            display2.textContent += '.';
            dotBtn.disabled = true;
            break;
    };
};


btn0.addEventListener('click', () => appendNumber(0));
btn1.addEventListener('click', () => appendNumber(1));
btn2.addEventListener('click', () => appendNumber(2));
btn3.addEventListener('click', () => appendNumber(3));
btn4.addEventListener('click', () => appendNumber(4));
btn5.addEventListener('click', () => appendNumber(5));
btn6.addEventListener('click', () => appendNumber(6));
btn7.addEventListener('click', () => appendNumber(7));
btn8.addEventListener('click', () => appendNumber(8));
btn9.addEventListener('click', () => appendNumber(9));
dotBtn.addEventListener('click', () => appendNumber('.'));

/* Add an operator to the operation */

function appendOperator(operator) {
    sendToNumbersArray();
    display1.textContent += display2.textContent;

    switch(operator) {
        case '+':
            display2.textContent = '+';
            operation = 'add';
            break;
        case '-':
            display2.textContent = '-';
            operation = 'subtract';
            break;
        case 'x':
            display2.textContent = 'x';
            operation = 'multiply';
            break;
        case '÷':
            display2.textContent = '÷';
            operation = 'divide';
            break;
        case '^':
            display2.textContent = '^';
            operation = 'exponentiate';
            break;
    }

    operatorBtns.forEach((button) => button.disabled = true);

    if(dotBtn.disabled) {
        dotBtn.disabled = false;
    }
}

addBtn.addEventListener('click', () => appendOperator('+'));
subtractBtn.addEventListener('click', () => appendOperator('-'));
multiplyBtn.addEventListener('click', () => appendOperator('x'));
divideBtn.addEventListener('click', () => appendOperator('÷'));
exponentiateBtn.addEventListener('click', () => appendOperator('^'));