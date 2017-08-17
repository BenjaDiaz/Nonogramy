/**
 * Created by benjamin on 7/15/17.
 */
import * as mocha from 'mocha';
import * as chai from 'chai';
import {NonogramSolver} from "./NonogramSolver";
import {Nonogram} from "./Nonogram";

const expect = chai.expect;
describe('Nonogram Solver', () => {

    it('should solve 5x5 nonogram correctly', () => {
        let nonogram = new Nonogram(5);
        nonogram.rowConstraints = [[1], [3], [5], [3], [1]];
        nonogram.colConstraints = [[1], [3], [5], [3], [1]];
        let solver = new NonogramSolver();
        expect(solver.solve(nonogram).matrix).to.deep.equal(
            [
                [1, 1, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [0, 0, 0, 0, 0],
                [1, 0, 0, 0, 1],
                [1, 1, 0, 1, 1]
            ]);
    });

});