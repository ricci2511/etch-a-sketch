const container = document.querySelector('#container');

makeGridSquares(16, 16);

function makeGridSquares(cols, rows) {
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);

    for(let i = 0; i < (cols * rows); i++) {
        let cell = document.createElement('div');
        cell.innerText = (i+1);
        container.appendChild(cell).className = 'grid-item';

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomBgColor();
        });
    }
}

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x}, ${y}, ${z})`;

    return bgColor;
}
