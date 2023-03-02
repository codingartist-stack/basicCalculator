console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let equation = '';
let total

buttons.forEach(button => button.addEventListener('click', (e) => {
    const input = button.textContent;

    if (button.textContent === 'CLEAR') {
        equation = '';
        screen.textContent = '';
    } else if (button.textContent === '=') {
        equation = 
    } else {
        equation += input;
        screen.textContent = equation;
        console.log(equation)
    }
    
    
}))

console.log(5 + 5);


