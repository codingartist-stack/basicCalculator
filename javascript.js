console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let calculated = [];
let equation

buttons.forEach(button => button.addEventListener(`click`, (e) => {
    
    const value = button.textContent;

    if (value === 'CLEAR') {
        calculated = [];
        screen.textContent = `.`
    } else {
        calculated.push(value);
        equation = calculated.join(``);
        screen.innerHTML = equation;
        console.log(equation);
    }

    
}));

console.log(5 + 5);


