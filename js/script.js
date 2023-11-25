function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);

    } else if (operator === "-") {
        return subtract(firstNum, secondNum);

    } else if (operator === "÷") {
        return divide(firstNum, secondNum);

    } else {
        return multiply(firstNum, secondNum);
    }
}

function start(isOn) {
    let total = 0;

    let display = document.querySelector(".calculator-display");
    display.textContent = '0'
    let displayValue;

    let firstNum;
    let secondNum;

    let inFirstNumber = true;
    let isDecimalPressed = false;
    const numbersButtons = document.querySelectorAll(".numbers-buttons");
    numbersButtons.forEach((button) => {
        button.addEventListener("click", () => {
            buttonPressed = button.textContent;

            if (inFirstNumber) {
                if (typeof firstNum === 'undefined') {
                    if (buttonPressed === '.' && isDecimalPressed === false) {
                        firstNum = `0${buttonPressed}`;
                    } else {
                        firstNum = buttonPressed; 
                    }

                }else if (firstNum === "-") {
                    firstNum = `-${buttonPressed}`;
                } else {
                    if (buttonPressed === '.' && isDecimalPressed === true){
                    } else {
                        firstNum += buttonPressed;                    
        
                    }

                }

                display.textContent = firstNum;
            } else {
                if (typeof secondNum === 'undefined') {
                    if (buttonPressed === '.' && isDecimalPressed === false) {
                        secondNum = `0${buttonPressed}`;
                    } else {
                        secondNum = buttonPressed; 
                    }

                } else {
                    if (buttonPressed === '.' && isDecimalPressed === true){
                    } else {
                        secondNum += buttonPressed;                    
        
                    }

                }
                display.textContent = firstNum + operator + secondNum;
            }




            if (buttonPressed === '.' && isDecimalPressed === false){
                isDecimalPressed = true
            }
            
        });
    });    
    let operator;
    const operatorsButtons = document.querySelectorAll(".operator-buttons");
    operatorsButtons.forEach((button) => {
        button.addEventListener(("click"), () => {
            buttonPressed = button.textContent;
            if (typeof operator !== 'undefined' && typeof secondNum !== 'undefined') {
                total = operate(Number(firstNum), operator, Number(secondNum));
                display.textContent = total;
                inFirstNumber = false;
                firstNum = total;

                let undefined;
                operator = undefined;
                secondNum = undefined;
                if (buttonPressed === '+') {
                    operator = '+'

                } else if (buttonPressed === '-') {
                    operator = '-'

                } else if (buttonPressed === '÷') {
                    operator = '÷'
                } else {
                    operator = '*';
                }

            } else {
            switch (buttonPressed) {
                case "+":
                    operator = "+";
                    inFirstNumber = false;
                    isDecimalPressed = false;
                    display.textContent = `${firstNum}${operator}`;
                    break;
                case "-":
                    operator =  "-";
                    inFirstNumber = false;
                    isDecimalPressed = false;
                    if (typeof firstNum === 'undefined') {
                        firstNum = '-';
                        inFirstNumber = true;
                        display.textContent = firstNum;
                    } else {
                        display.textContent = `${firstNum}${operator}`;
                    }
                    break;
                case "÷":
                    operator = "÷"
                    inFirstNumber = false;
                    isDecimalPressed = false;

                    display.textContent = `${firstNum}${operator}`;
                    break;
                case "*":
                    operator = "*";
                    inFirstNumber = false;
                    isDecimalPressed = false;
                    display.textContent = `${firstNum}${operator}`;
                    break;
            };    
            }
            
        });
    });

} 
const calculator = document.querySelector('.calculator-container')
const display = document.querySelector(".calculator-display");
const buttons = document.querySelectorAll("button");
const powerButton = document.querySelector('.power');
isOn = false;

buttons.forEach((button) => {
    button.disabled = true;
});

powerButton.addEventListener('click', () => {
    if (isOn === false) {
        calculator.setAttribute('style', 'box-shadow: 0 0 3px 1px rgb(46, 46, 46), 0 0 3px 1px rgb(46, 46, 46), 0 0 3px 1px rgb(46, 46, 46), 0 0 3px 1px rgb(46, 46, 46)');
        display.setAttribute('style', 'box-shadow: 0 0 3px 1px rgb(167, 255, 167), 0 0 3px 1px rgb(167, 255, 167), 0 0 3px 1px rgb(167, 255, 167), 0 0 3px 1px rgb(167, 255, 167');
        start();
        buttons.forEach((button) => { 
            if (button.textContent !== 'ON-OFF') {
                button.disabled = false;                
            }
            button.setAttribute('style', 'color: white');
        });
        isOn = true;
        
    } else {
        calculator.setAttribute('style', 'box-shadow: none');
        display.setAttribute('style', 'box-shadow: none');
        buttons.forEach((button) => {
            if (button.textContent !== 'ON-OFF') {
                button.disabled = true;                
            }
            button.setAttribute('style', 'color: gray');
        });

        isOn = false;
        display.textContent = '_';
    }
});