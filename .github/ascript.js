const gameBoard = document.getElementById('game-board');
const gridSize = 10;
let snake = [{ x: 0, y: 0 }];
let direction = 'right';

function draw() {
    gameBoard.innerHTML = '';
    snake.forEach(segment => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = segment.y + 1;
        snakeSegment.style.gridColumnStart = segment.x + 1;
        snakeSegment.classList.add('snake');
        gameBoard.appendChild(snakeSegment);
    });
}

function update() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }

    snake.unshift(head);
    snake.pop();
}

function main() {
    update();
    draw();
}

setInterval(main, 100);
