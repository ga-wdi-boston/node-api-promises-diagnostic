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
    fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  })
  .then(() => {
    const rl = require('readline');
    const rli = rl.createInterface({
      input: fs.createReadStream(filename),
    });
    let sum = 0;
    rli.on('line', (line) => sum += +line);
  })
.catch(console.error)
.then(process.exit);
};

module.exports = {
  sumLines,
};
