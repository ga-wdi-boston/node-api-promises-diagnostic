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
// const sumLines = (filename) => {

const sumLines = (fileName) => {
  const promiseReadFile = function (fileName, options) {
    return new Promsie((resolve, reject) => {

      fs.readFile(fileName, options, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
  };

// want to separate concerns and split up each piece

// I'm not sure what to do with this yet so just comment it out


  // fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
  //   let lno = 0;
  //   let sum = lines.split('\n').reduce((prev, curr, i) => {
  //     lno = i;
  //     return prev + (+curr);
  //   }, 0);
  //   let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
  //   callback(error, sum);
  // });


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
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};


// set up the promise chain
promiseReadFile(fileName, { encoding: 'utf8' })
  .then(sumLinesOfArbitraryLengthFile)  //will need a .then() for each of the pieces above
  .catch((error) => console.error(error.stack))
  ;
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
