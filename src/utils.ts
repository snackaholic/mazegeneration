import { Cell } from "./cell";

export function giveUnvisitedCells(cellarray : Cell[]) : Cell[] {
    return cellarray.filter(checkCellNotVisited);
}

function checkCellNotVisited(cell : Cell) {
    return cell.visited === false;
}

export function getCellByKey(cellarray : Cell[], key : {x : number, y : number}) {
    return cellarray.filter((element) => checkCellKey(element, key));
}

function checkCellKey(cell : Cell, key : {x : number, y : number} ) {
    return cell.isCorrectCell(key.x, key.y);
}

export function randomItem(array : any[]) : any {
    return array[Math.floor(Math.random() * array.length)];
}