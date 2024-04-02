let grid;
const w = 10;
let cols, rows; // Declare cols and rows globally

// making 2d array
function make2DArray(cols, rows) {
    let arr = Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function setup() {
    createCanvas(400, 400);
    cols = width / w; // Define cols
    rows = height / w; // Define rows
    grid = make2DArray(cols, rows); // Invoke make2DArray after cols and rows are defined


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
    grid[10][10] = 1;
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

    let newGrid = make2DArray(cols, rows)
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
           let currentSand = grid[i][j]
           if(currentSand > 0){
             let belowSand = grid[i][j + 1]
             if(belowSand === 0){
                newGrid[i][j] = 0
                newGrid[i][j + 1] = 1
             }
           }
           
        }

    }
    grid = newGrid
}

