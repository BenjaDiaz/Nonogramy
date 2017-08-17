import { Nonogram } from "./Nonogram";
/**
 * Created by benjamin on 7/15/17.
 */
export declare class NonogramSolver {
    solve(nonogram: Nonogram): Nonogram;
    private solveHelper(nonogram, row, col);
    private isValid(nonogram);
}
