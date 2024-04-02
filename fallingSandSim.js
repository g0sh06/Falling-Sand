let grid;
const w = 10;
let cols, rows; // Declare cols and rows globally

// making 2d array
function make2DArray(cols, rows) {
    let array = Array(cols);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 0;
        }
    }
    return array;
}

function setup() {
    createCanvas(800, 600);
    cols = width / w; // Define cols
    rows = height / w; // Define rows
    grid = make2DArray(cols, rows); // Invoke make2DArray after cols and rows are defined
}

function draw() {
    background(255)
    // if the box is 1 it will be black
    // if the box is 0 it will be white
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) { // Corrected loop condition
            stroke(255)
            fill(grid[i][j] * 255);
            let x = i * w
            let y = j * w
            square(x, y, w)
        }
    }
}