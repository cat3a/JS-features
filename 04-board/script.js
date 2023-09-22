const board = document.querySelector('#board');
const SQUARES_NUMBER = 702;
const COLORS = ['#ffffff', '#c0c0c0', '#ffffe0', '#fafad2', '#f0e68c', '#afeeee', '#87ceeb'];

for (let i = 0; i <= SQUARES_NUMBER - 1; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    board.appendChild(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = `#222`;
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
