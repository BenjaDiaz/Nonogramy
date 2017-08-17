/**
 * Created by benjamin on 7/15/17.
 */
export declare class Nonogram {
    private _matrix;
    private _size;
    private _rowConstraints;
    private _colConstraints;
    constructor(size: number);
    matrix: boolean[][];
    size: number;
    rowConstraints: number[][];
    colConstraints: number[][];
}
