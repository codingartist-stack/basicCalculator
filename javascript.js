console.log(`Calculator`)

const screen = document.getElementById(`displayScreen`);
const buttons = document.querySelectorAll(`button`);

let calculated

buttons.forEach(button => button.addEventListener(`click`, (e) => {
    const value = button.textContent;

    screen.innerHTML = value;
    console.log(value)
}));

console.log(5 + 5)