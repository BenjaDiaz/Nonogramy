/**
 * Created by benjamin on 7/15/17.
 */
import * as mocha from "mocha";
import * as chai from "chai";
import { NonogramSolver } from "./NonogramSolver";
import { Nonogram } from "./Nonogram";

const expect = chai.expect;
describe("Nonogram Solver", () => {

  it("should solve 5x5 nonogram correctly", () => {
    let nonogram = new Nonogram(5);
    nonogram.rowConstraints = [[1], [3], [5], [3], [1]];
    nonogram.colConstraints = [[1], [3], [5], [3], [1]];
    let solver = new NonogramSolver();
    expect(solver.solve(nonogram).matrix).to.deep.equal([
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
    ]);
  });

  it("should solve 6x6 nonogram correctly", () => {
    let nonogram = new Nonogram(6);
    nonogram.rowConstraints = [[1, 1], [4], [5], [1], [1, 1], [3, 1]];
    nonogram.colConstraints = [[1, 1], [2, 1], [3, 2], [2], [3, 2], [1]];
    let solver = new NonogramSolver();
    expect(solver.solve(nonogram).matrix).to.deep.equal([
      [1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1],
      [0, 0, 0, 1, 0, 1],
    ]);
  });
});
