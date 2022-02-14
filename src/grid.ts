import { Cell } from "./cell";
import { getCellByKey, giveUnvisitedCells, randomItem } from "./utils";

export class Grid {
    size : number;
    cells : Cell[];
    constructor(size : number) {
        this.size = size;
        var cells = [];
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                cells.push(new Cell(i, j));
            }
        }
        this.cells = cells;
    }

    recursiveBacktrackerMaze() {
        // make decision of initial cell
        var initialCell = randomItem(this.cells);
        var currentCell : Cell = initialCell;
        var keysStack : Cell[] = [];
        for (var ucells = giveUnvisitedCells(this.cells) ; ucells.length > 0; ucells = giveUnvisitedCells(this.cells)) {
            currentCell.visited = true;
            // get unvisited neighbors
            var neighborCellKeys = currentCell.giveNeighborKeys(this.size, this.size);
            let unvisitedNeighborKeys = [];
            for (let i = 0; i < neighborCellKeys.length; i++) {
                let cell = getCellByKey(this.cells, neighborCellKeys[i])[0];
                if (!cell.visited) {
                    unvisitedNeighborKeys.push(cell);
                }
            }
            // If the current cell has any neighbours which have not been visited
            if (unvisitedNeighborKeys.length > 0) {
                // Push the current cell to the stack
                keysStack.push(currentCell);
                // Choose randomly one of the unvisited neighbours
                var randomNeighborKey = randomItem(unvisitedNeighborKeys);
                var randomCell = getCellByKey(this.cells, randomNeighborKey)[0];
                // Remove the wall between the current cell and the chosen neighbor cell
                currentCell.removeWallToCell(randomCell);
                // Make the chosen cell the current cell and mark it as visited
                currentCell = randomCell;
            } else if (keysStack.length > 0) {
                let temp = keysStack.pop();
                if (temp != undefined) {
                    currentCell = temp;
                }
            }
        }
    }

    drawGrid() {
        let gridsize = this.size;
        let cellsize = 20;
        var canvas : any = document.getElementById("myCanvas");
        if (canvas != null && canvas != undefined) {
            var ctx = canvas.getContext("2d");
            canvas.width = gridsize * cellsize;
            canvas.height = gridsize * cellsize;
            for (var i = 0; i < this.cells.length; i++) {
                var cell = this.cells[i];
                if (cell.visited) {
                    ctx.fillStyle = "#00FF00";
                } else {
                    ctx.fillStyle = "#FF0000";
                }
                // draw cell, visited = green, unvisited = red
                ctx.fillRect(cell.x * cellsize, cell.y * cellsize, cellsize, cellsize);
                // draw topwall
                if (cell.wall[0]) {
                    ctx.beginPath();
                    ctx.moveTo(cell.x * cellsize, cell.y * cellsize);
                    ctx.lineTo(cell.x * cellsize + cellsize, cell.y * cellsize);
                    ctx.stroke();
                }
                // draw rightwall
                if (cell.wall[1]) {
                    ctx.beginPath();
                    ctx.moveTo(cell.x * cellsize + cellsize, cell.y * cellsize);
                    ctx.lineTo(cell.x * cellsize + cellsize, cell.y * cellsize + cellsize);
                    ctx.stroke();
                }
                // draw bottomwall
                if (cell.wall[2]) {
                    ctx.beginPath();
                    ctx.moveTo(cell.x * cellsize, cell.y * cellsize + cellsize);
                    ctx.lineTo(cell.x * cellsize + cellsize, cell.y * cellsize + cellsize);
                    ctx.stroke();
                }
                // draw leftwall
                if (cell.wall[3]) {
                    ctx.beginPath();
                    ctx.moveTo(cell.x * cellsize, cell.y * cellsize);
                    ctx.lineTo(cell.x * cellsize, cell.y * cellsize + cellsize);
                    ctx.stroke();
                }
            }
        } else {
            console.log("NO CANVAS FOUND");
        }
    }
}