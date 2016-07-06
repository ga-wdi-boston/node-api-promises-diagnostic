// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// The Promise returned should be rejected.

'use strict';

const fs = require('fs');

const sumLines = (filename) => {
  return new Promise ((resolve, reject) => {
  fs.readFile(filename, { encoding: 'utf8'}, (err, lines) => {
    let sum = lines.split('\n').reduce((prev, curr) => {
      return prev + (+curr);
    }, 0);
    if (isNaN(sum)) {
      err = new Error('a line is not a number');
      reject(err);
    }
    else {
      resolve(sum);
    }
  });
})
.then()
.catch((err) => { // handle error conditions
  throw err;
});
};


module.exports = {
  sumLines,
};
