console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let equation = '';
let total;

buttons.forEach(button => button.addEventListener('click', (e) => {
    const input = button.textContent;

    if (button.textContent === 'CLEAR') {
        equation = '';
        screen.textContent = '';
    } else if (button.textContent === '=') {
        // equation = '';
        // screen.textContent = 'total = P';

        //bucket to put answer in
        //bucket to put operator
        //loop through numbers and operations

        let answer;
        let operator;

        for (let value of equation) {
            const isNumber = (
                value !== '+' &&
                value !== '-' &&
                value !== '*' &&
                value !== String.fromCharCode(0xF7)
            ) 
            if (isNumber) {        
                value = parseFloat(value); 
                if (answer === undefined) {
                    answer = value;
                } else {
                    switch (operator) {
                        case '+':
                            answer += value;
                            break;
                        case '-':
                            answer -= value;
                            break;
                        case '*':
                            answer *= value;
                            break;
                        case String.fromCharCode(0xF7):
                            answer /= value;
                    }
                }
            } else {
                operator = value;
            }
        } 
            screen.textContent = answer;
    } else {
        equation += input;
        screen.textContent = equation;
        console.log(equation)
    }
    
    
}))

console.log(5 + 5);


