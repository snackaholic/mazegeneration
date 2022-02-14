"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomItem = exports.getCellByKey = exports.giveUnvisitedCells = void 0;
function giveUnvisitedCells(cellarray) {
    return cellarray.filter(checkCellNotVisited);
}
exports.giveUnvisitedCells = giveUnvisitedCells;
function checkCellNotVisited(cell) {
    return cell.visited === false;
}
function getCellByKey(cellarray, key) {
    return cellarray.filter((element) => checkCellKey(element, key));
}
exports.getCellByKey = getCellByKey;
function checkCellKey(cell, key) {
    return cell.isCorrectCell(key.x, key.y);
}
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randomItem = randomItem;
