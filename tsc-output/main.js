"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grid_1 = require("./grid");
let testGrid = new grid_1.Grid(25);
testGrid.recursiveBacktrackerMaze();
console.log(testGrid);
testGrid.drawGrid();
