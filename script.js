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
    return firstNum / secondNum;
};

function exponentiateNums(firstNum, secondNum) {
    return firstNum ** secondNum;
};


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