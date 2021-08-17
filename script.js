const container = document.querySelector('#container');

function makeGridSquares(cols, rows) {
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);

    for(let i = 0; i < (cols * rows); i++) {
        let cell = document.createElement('div');
        cell.innerText = (i+1);
        container.appendChild(cell).className = 'grid-item';
    }
}

makeGridSquares(16, 16);