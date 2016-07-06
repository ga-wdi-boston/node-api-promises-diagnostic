// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// The Promise returned should be rejected.
//

'use strict';

const fs = require('fs');

const sumLines = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (error, lines) => {
      if (error) {
        reject(error);
      } else {
        resolve(lines);
      }
    });
  })
  let splitInToLines = (lines) => {
    lno = 0;
    let sum = lines.split('\n').reduce((prev, curr, i) => {
    lno = i;
    return prev + (+curr);
      }, 0);
  };

  let tellError = (lines) => {
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  };

sumLines(filename, { encoding: 'utf8' })
.then(splitInToLines)
.then(tellError)


module.exports = {
  sumLines,
};
