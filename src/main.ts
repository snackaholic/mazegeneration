import { Grid } from "./grid";

let testGrid : Grid = new Grid(25);

testGrid.recursiveBacktrackerMaze();

console.log(testGrid);

testGrid.drawGrid();
