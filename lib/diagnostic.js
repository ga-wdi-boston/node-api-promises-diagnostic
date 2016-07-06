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

const sumLines = (filename, callback) => {
  return new Promise ((resolve, reject) = {
  fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
    if (error) {
      reject(error);
    }

    resolve(lines);
    });
  });
});
    let lno = 0;
    let sum (lines) => {lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0)};
    let error () => { isNaN(sum) && new Error(`line ${lno}: not a number`)};
    //callback(error, sum);
  });
};
sumLines(filename, callback)
.then(sum)
.then(error)

const sumLinesOfArbitraryLengthFile = (filename, callback) => {
  return new Promise ((resolve, reject) => {
    if (error) {
      reject(error);

      resolve(filename);
    }
  const rl = require('readline');
  const rli () => rl.createInterface({
    input: fs.createReadStream(filename),
  });
  let lno = 0;
  let sum = 0;
  rli.on('line', (line) => {
    lno++;
    sum += +line;
  });
  rli.on('close', () => {
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

sumLinesOfArbitraryLengthFile()
.then(rli)
.then(rli.on => 'line')
.then(rli.on => 'close')
.catch(console.error)
module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
