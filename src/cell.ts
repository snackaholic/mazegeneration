/**
 * Basically this class represents one part in a grid. 
 * 
 * f.e. the following grid
 * 
 * xxxxxxxx
 * xxxxxxxx
 * xxxxxxxx
 * 
 * very first x on first row
 * x = 0, y = 0
 * 
 * last x on last row
 *  x = 7, y = 2
 * 
 */
export class Cell {
    x: number;
    y: number;
    visited: boolean;
    wall: boolean[];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.visited = false;
        // top right bottom left 
        this.wall = [true, true, true, true]
    }

    isCorrectCell(x: number, y: number) {
        return this.x === x && this.y === y;
    }

    removeWallToCell(neighbor : Cell) {
        // im left to my neighbor
        if (this.x < neighbor.x) {
            // remove my right wall
            this.wall[1] = false;
            // remove neighbor left wall
            neighbor.wall[3] = false;
        }
        // im top to my neighbor
        if (this.y < neighbor.y) {
            // remove my bottom wall
            this.wall[2] = false;
            // remote neighbor top wall
            neighbor.wall[0] = false;
        }
        // im right to my neighbor
        if (this.x > neighbor.x) {
            // remove my left wall
            this.wall[3] = false;
            // remove neighbor right wall
            neighbor.wall[1] = false;
        }
        // im under my neighbor
        if (this.y > neighbor.y) {
            // remove my top wall
            this.wall[0] = false;
            // remove neighbor bottom wall
            neighbor.wall[2] = false;
        }
    }

    giveNeighborKeys(limitx: number, limity: number): { x: number, y: number }[] {
        var keys = [];
        // left
        if (this.x - 1 >= 0) {
            keys.push({ x: this.x - 1, y: this.y });
        }
        // right
        if (this.x + 1 < limitx) {
            keys.push({ x: this.x + 1, y: this.y });
        }
        // up
        if (this.y - 1 >= 0) {
            keys.push({ x: this.x, y: this.y - 1 });
        }
        // down
        if (this.y + 1 < limity) {
            keys.push({ x: this.x, y: this.y + 1 });
        }
        return keys;
    }
}