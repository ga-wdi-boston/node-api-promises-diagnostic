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

// I wrote the promisified version directly above the original function given to us so may be a bit confusing. I also only did the first part (did not do sumLinesOfArbitraryLengthFile)
'use strict';

const fs = require('fs');

const sumLines = (filename) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, { encoding: 'utf8' }, (error, lines) => {
      if(error){
        reject(error);
      }
      else{
        resolve(lines);
      }
    });
  });
}

let splitLines = function(lines) {
  let lno = 0;
    return lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
};

sumLines(inFile, { encoding: 'utf8' })
.then(splitLines);  // which also sums them...
.catch(error);

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
// const sumLines = (filename) => {
// const sumLines = (filename, callback) => {
//   fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
//     let lno = 0;
//     let sum = lines.split('\n').reduce((prev, curr, i) => {
//       lno = i;
//       return prev + (+curr);
//     }, 0);
//     let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
//     callback(error, sum);
//   });
// };

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

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
