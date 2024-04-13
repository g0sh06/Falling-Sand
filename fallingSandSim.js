let grid;
const w = 10;
let cols, rows; // Declare cols and rows globally
let hueValue = 10

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
    colorMode(HSB, 360, 255, 255)
    cols = width / w; // Define cols
    rows = height / w; // Define rows
    grid = make2DArray(cols, rows); // Invoke make2DArray after cols and rows are define

}

function mouseDragged() {
    let i = floor(mouseX / w);
    let j = floor(mouseY / w);
    if(i >= 0 && 
       i <= cols - 1 &&
       j >= 0 &&
       j <= rows - 1) {
            grid[i][j] = hueValue;
        }
    hueValue += 0.5
}

function draw() {
    background(0)
    // if the box is 1 it will be black
    // if the box is 0 it will be white
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) { // Corrected loop condition
            noStroke()
            if(grid[i][j] > 0) {
                fill(grid[i][j], 255, 255);
                let x = i * w
                let y = j * w
                square(x, y, w)
            }
        }
    }

    let newGrid = make2DArray(cols, rows)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let currentSand = grid[i][j]
            if (currentSand > 0) {
                let belowSand = grid[i][j + 1]
                if (belowSand === 0 && j < rows - 1) {
                    newGrid[i][j] = 0
                    newGrid[i][j + 1] = grid[i][j]
                } else {
                    let direction = Math.random() < 0.5 ? -1 : 1
                    // taking the main grid, because the newGrid is used only for making changes
                    // and the main grid contains already declared changes which includes the 
                    if (i + direction >= 0 && i + direction < cols && grid[i + direction][j + 1] === 0) {
                        newGrid[i][j] = 0;
                        newGrid[i + direction][j + 1] = grid[i][j];
                    } else {
                        newGrid[i][j] = grid[i][j]
                    }
                }
            }

        }
    }
    grid = newGrid
}

