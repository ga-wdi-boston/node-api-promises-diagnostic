// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// the Promise returned should be rejected.
//

'use strict';

// const fs = require('fs');
const readFile = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      if (err) {
              reject(err);
            }
            else {
              resolve(lines);
            }
          });
        });

readFile(filename)
  .then(lines => lines.split('\n').reduce((prev, curr, i) => {
  lno = i;
  return prev + (+curr);
}, 0))
  .then()
  .catch(err => {
    console.error(err);
  });
}
// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature


module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
