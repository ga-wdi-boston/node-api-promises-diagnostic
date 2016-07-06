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
  new Promise((resolve, reject) => {
    fs.readFile(filename, {
      encoding: 'utf8'
    }, (error, lines) => {
      if (error) {
        reject(error);
      }
      resolve(lines);
    });
  }).then((lines) => {
    let sum = lines.split('\n').reduce((prev, curr) => {
      return prev + (+curr);
    }, 0);
    let error = isNaN(sum) && new Error(`there are non-numbers in the data`);
    if (error) {
      reject(error);
    }
    resolve(sum);
  }).catch((error) => {
    console.error(error.stack);
  });
};

module.exports = {
  sumLines,
};
