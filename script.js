const DEFAULT_GRID_SIZE = 16;
const DEFAULT_BG_COLOR = 'black';

let currentColor = DEFAULT_BG_COLOR;
let userInput = '';

const gridContainer = document.querySelector('#gridContainer');
const defaultColorBtn = document.querySelector('#defaultColorBtn');
const randomColorBtn = document.querySelector('#randomColorBtn');
const clearGridBtn = document.querySelector('#clearGridBtn');

clearGridBtn.addEventListener('click', clearGrid);
randomColorBtn.addEventListener('click', () => {
    updateColor('random');
});

defaultColorBtn.addEventListener('click', () => {
    updateColor(DEFAULT_BG_COLOR);
});

function updateColor(newColor) {
    currentColor = newColor;
}

function createGrid(size) {
    gridContainer.style.setProperty('--grid-cols', size);
    gridContainer.style.setProperty('--grid-rows', size);

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'grid-item';

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = checkColor();
        });
    }
}

function clearGrid() {
    gridContainer.innerHTML = '';
    userInput = '';
    gridContainer.style.setProperty('--grid-cols', DEFAULT_GRID_SIZE);
    gridContainer.style.setProperty('--grid-rows', DEFAULT_GRID_SIZE);

    getInput();
}

function getInput() {
    userInput = prompt('Enter a number to create a new grid', '');
    console.log(userInput);

    if(userInput == '') {
        alert('Input field cannot be empty');
        getInput();
    } else if (userInput >= 100) {
        alert('Number cannot be equal or greater than 100.');
        getInput();
    } else if (userInput <= 0) {
        alert('Number cannot be equal or less than 0.');
        getInput();
    } else {
        createGrid(userInput);
    }
}

function checkColor() {
    if (currentColor == DEFAULT_BG_COLOR) {
        return DEFAULT_BG_COLOR;
    } else if(currentColor == 'random') {
        return randomBgColor();
    }
}

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`;

    return bgColor;
}

createGrid(DEFAULT_GRID_SIZE);
console.log(currentColor);