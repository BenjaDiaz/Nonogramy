# Nonogramy [![npm version](https://badge.fury.io/js/nonogramy.svg)](https://badge.fury.io/js/nonogramy)

Simple library for solving nonograms.

## Install

    npm install nonogramy

## Use

    var nonogramy = require('nonogramy');
    var nonogram = new nonogramy.Nonogram(5);
    nonogram.rowConstraints = [[1], [3], [5], [3], [1]];
    nonogram.colConstraints = [[1], [3], [5], [3], [1]];
    var solver = new nonogramy.NonogramSolver();
    var solvedNonogram = solver.solve(nonogram);
    console.log(solvedNonogram.matrix);