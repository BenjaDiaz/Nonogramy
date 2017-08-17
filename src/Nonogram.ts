/**
 * Created by benjamin on 7/15/17.
 */
import {NonogramCell} from "./NonogramCell";

export class Nonogram {
    private _matrix: NonogramCell[][];
    private _size: number;
    private _rowConstraints: number[][];
    private _colConstraints: number[][];

    constructor(size: number) {
        this._size = size;
        this._matrix = new Array(size);
        for (let i = 0; i < size; i++) {
            this._matrix[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                this._matrix[i][j] = NonogramCell.UNKNOWN;
            }
        }
    }

    get matrix(): NonogramCell[][] {
        return this._matrix;
    }

    set matrix(value: NonogramCell[][]) {
        this._matrix = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    get rowConstraints(): number[][] {
        return this._rowConstraints;
    }

    set rowConstraints(value: number[][]) {
        this._rowConstraints = value;
    }

    get colConstraints(): number[][] {
        return this._colConstraints;
    }

    set colConstraints(value: number[][]) {
        this._colConstraints = value;
    }
}