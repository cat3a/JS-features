const startButton = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const gameTime = document.getElementById('time');
const board = document.getElementById('board');
const COLORS = ['#ffffff', '#ffff00', '#ff4500', '#800000', '#7cfc00', '#00ffff', '#00008b', '#ff1493', '#8b008b', '#006400', '#7fffd4', '#000000', '#db7093', '#5f9ea0', '#8B4513'];

let time = 0;
let score = 0;

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = Number(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
    //Вызов функции для автоматической игры: getWin();
}

function decreaseTime() {
    let currentTime = --time;
    if (currentTime === 0) {
        finishGame();
    }

    if (currentTime < 10) {
        currentTime = `0${currentTime}`;
    }

    setTime(currentTime);
}

function setTime(value) {
    gameTime.innerHTML = `00:${value}`;
}

function finishGame() {
    gameTime.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const sizeCircle = getRandomNumber(20, 80);
    const colorCircle = getRandomColor();
    const {width, height} = board.getBoundingClientRect();
    const xCoordinate = getRandomNumber(0, width - sizeCircle);
    const yCoordinate = getRandomNumber(0, height - sizeCircle);

    circle.classList.add('circle');
    circle.style.width = `${sizeCircle}px`;
    circle.style.height = `${sizeCircle}px`;
    circle.style.backgroundColor = `${colorCircle}`;
    circle.style.top = `${yCoordinate}px`;
    circle.style.left = `${xCoordinate}px`;
    board.appendChild(circle);
}

function getRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// Функция для автоматической игры

function getWin() {
    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click();
        }
    }

    setInterval(kill, 70);
}
