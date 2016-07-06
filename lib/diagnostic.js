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
let filename = require('integers.txt');

const sumLines = (filename, callback) => {
  new Promise ((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      if (error) {
        reject(error);
      }
        resolve(data);
      });
    })
      .then((lines) => {
        let lno = 0;
        let sum = lines.split('\n').reduce((prev, curr, i));
        lno = i;
        return prev + (+curr);
      })
      .then((sum) => {
        console.log(sum, 0);
      })
      .catch ((error) => {
        error = isNaN(sum) && new Error(`line ${lno}: not a number`);
      })
      callback(error, sum);
    };



module.exports = {
  sumLines,
};
