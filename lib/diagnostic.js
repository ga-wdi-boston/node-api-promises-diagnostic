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
    fs.readFile(filename, { encoding: 'utf8' }, (error, lines) => {
      if (error) { reject(error) }
      resolve(lines);
    });
  })
  .then((lines) => {
    let lno = 0;
    let sum = lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
    if (isNaN(sum)) {
      throw new Error (`that is not a number`);
    }
      return sum;
  })
  .catch((error) => {
    console.error(error);
  });
};

module.exports = {
  sumLines,
};
