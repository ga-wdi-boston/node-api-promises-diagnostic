// The following function sums the numbers in a file.
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

const fs = require('fs');

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
const sumLines = (filename) => {
  const promiseSumLines = (filename, callback) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
          if (err) {
            let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
            console.error(error);
            reject(err);
          }
          resolve(lines);
      });
    });
  };

      const computeSum = function( lines ) {
        let lno = 0;
        let sum = lines.split('\n').reduce((prev, curr, i) => {
          lno = i;
          return prev + (+curr);
        }, 0);
        return sum;
      };

      const sumLinesOfArbitraryLengthFile = (filename, callback) => {
        const rl = require('readline');
        const rli = rl.createInterface({
          input: fs.createReadStream(filename),
        });
        let lno = 0;
        let sum = 0;
        rli.on('line', (line) => {
          lno++;
          sum += +line;
        });
        rli.on('close', () => {

          callback(error, sum);
        });
      };


      promiseSumLines(inFile, { encoding: 'utf8' })
        .then(computeSum)
        .then(removeTrailingNewLine)
        .then(randomizeArray)
        .then(logLines)
        .catch(error => console.error(error.stack));
      };
    };

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
