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
    fs.readFile(filename, { encoding: 'utf8' }, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  })
  .then((content) => content.split('\n'))
  .then((lines) => lines.filter((line) => !!line))
  .then((lines) => lines.map((line) => parseFloat(line)))
  .then((lines) => lines.reduce((a, b) => a + b))
  .then((sum) => sum)
  .catch(console.error);
};

module.exports = {
  sumLines,
};


// {
//   new Promise((resolve, reject) => {
//     console.log(sum);
//     if(isNaN(sum)) {
//       reject(new Error('line Not a Number!'));
//     }
//     resolve(null, sum);
//   });
// })
