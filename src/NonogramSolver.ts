import {Nonogram} from "./Nonogram";
import {NonogramCell} from "./NonogramCell";

/**
 * Created by benjamin on 7/15/17.
 */
export class NonogramSolver {
    public solve(nonogram: Nonogram): Nonogram {
        this.solveHelper(nonogram, 0, 0);
        return nonogram;
    }

    private solveHelper(nonogram: Nonogram, row: number, col: number): boolean {
        if (col === nonogram.matrix[0].length) {
            col = 0;
            row = row + 1;
        }
        if (row >= nonogram.size) {
            return true;
        }
        nonogram.matrix[row][col] = NonogramCell.FILLED;
        if (this.isValid(nonogram)) {
                if(this.solveHelper(nonogram, row, col + 1)) {
                    return true;
                }
        }
        nonogram.matrix[row][col] = NonogramCell.EMPTY;
        if (this.isValid(nonogram)) {
            if(this.solveHelper(nonogram, row, col + 1)) {
                return true;
            }
        }
        nonogram.matrix[row][col] = NonogramCell.UNKNOWN;
        return false;
    }

    private isValid(nonogram: Nonogram): boolean {
        return this.areRowsValid(nonogram) && this.areColsValid(nonogram);
    }

    private areRowsValid(nonogram: Nonogram): boolean {
        return nonogram.rowConstraints.every((rowConstraintArr, rowIndex) => {
            if (rowConstraintArr.length !== 0) {
                let rowConstraintIndex = 0;
                let currentConsecutiveCells = 0;
                for (let i = 0; i < nonogram.matrix[rowIndex].length; i++) {
                    let value = nonogram.matrix[rowIndex][i];
                    if (value === NonogramCell.UNKNOWN) {
                        return true;
                    }
                    if (value === NonogramCell.FILLED) {
                        currentConsecutiveCells++;
                    }
                    if ((value === NonogramCell.EMPTY || i === (nonogram.matrix[rowIndex].length - 1)) && currentConsecutiveCells > 0) {
                        if (currentConsecutiveCells !== rowConstraintArr[rowConstraintIndex]) {
                            return false;
                        }
                        currentConsecutiveCells = 0;
                        rowConstraintIndex++;
                    }
                    if (currentConsecutiveCells > 0 &&
                        (rowConstraintIndex >= rowConstraintArr.length || currentConsecutiveCells > rowConstraintArr[rowConstraintIndex])) {
                        return false;
                    }
                }
                return rowConstraintIndex !== 0;
            }
        });
    }

    private areColsValid(nonogram: Nonogram): boolean {
        return nonogram.colConstraints.every((colConstraintArr, colIndex) => {
            let colConstraintIndex = 0;
            let currentConsecutiveCells = 0;
            for (let i = 0; i < nonogram.matrix.length; i++) {
                let value = nonogram.matrix[i][colIndex];
                if (value === NonogramCell.UNKNOWN) {
                    return true;
                }
                if (value === NonogramCell.FILLED) {
                    currentConsecutiveCells++;
                }
                if ((value === NonogramCell.EMPTY || i === (nonogram.matrix.length - 1)) && currentConsecutiveCells > 0) {
                    if (currentConsecutiveCells !== colConstraintArr[colConstraintIndex]) {
                        return false;
                    }
                    currentConsecutiveCells = 0;
                    colConstraintIndex++;
                }
                if (currentConsecutiveCells > 0 &&
                    (colConstraintIndex >= colConstraintArr.length || currentConsecutiveCells > colConstraintArr[colConstraintIndex])) {
                    return false;
                }
            }
            return colConstraintIndex !== 0;
        });
    }
}