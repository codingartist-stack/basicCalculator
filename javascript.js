console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let equation = '';
let total;

buttons.forEach(button => button.addEventListener('click', (e) => {
    const input = button.textContent;
    const isNumber = true;

    if (button.textContent === 'CLEAR') {
        equation = '';
        screen.textContent = '';
    } else if (button.textContent === '=') {
        equation = '';
        screen.textContent = 'total = P';

        //bucket to put total in
        //loop through numbers and operations

        for(let value of equation) {
            if(value = parseFloat())
        }


    } else {
        equation += input;
        screen.textContent = equation;
        console.log(equation)
    }
    
    
}))

console.log(5 + 5);


