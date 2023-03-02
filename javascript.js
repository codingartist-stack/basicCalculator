console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let calculated = [];
let equation

buttons.forEach(button => button.addEventListener(`click`, (e) => {
    
    const value = button.textContent;

    if (value === 'CLEAR') {
        calculated = [];
        screen.textContent = ``
    } else if (value === '=') {
        let answer;
        let operator;
        for (let val of calculated) {
            // is this an operator or a number?
            // if number, make it an int
            isNumber = (
                val !== '+' &&
                val !== '-' &&
                val !== '*' &&
                val !== String.fromCharCode(0xF7)
            )
            if (isNumber) {
                val = parseFloat(val);
                if (answer === undefined) {
                    answer = val
                } else {
                    switch (operator) {
                        case '+':
                            answer += val;
                            break;
                        case '-':
                            answer -= val;
                            break;
                        case '*':
                            answer *= val;
                            break;
                        case String.fromCharCode(0xF7):
                            answer /= val;
                            break;
                        default:
                            break;
                    }
                }
            } else {
                operator = val;
            }
        }

        screen.textContent = answer;
    } else {
        calculated.push(value);
        equation = calculated.join(``);
        screen.innerHTML = equation;
        console.log(equation);
    }

    
}));

console.log(5 + 5);


