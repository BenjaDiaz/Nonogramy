# Nonogramy

Simple library for solving nonograms.

## Install

    npm install nonogramy

## Use

    var nonogramy = require('nonogramy');
    var nonogram = new nonogramy.Nonogram(5);
    nonogram.rowConstraints = [[1], [3], [5], [3], [1]];
    nonogram.colConstraints = [[1], [3], [5], [3], [1]];
    let solver = new nonogramy.NonogramSolver();
    let solvedNonogram = solver.solve(nonogram);
    console.log(solvedNonogram.matrix);