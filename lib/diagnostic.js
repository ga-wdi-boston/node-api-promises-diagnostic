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

//I know from looking at the previous lesson that I need to set up a new promise with resolve
// and reject as parameters. I then need to add in an if statement that takes those paramters into
// account right before the readFile. I know I need an if statment that will take in and deal with
// those paramters. I am not sure how to incorprate them into the function properly though. I tried // to put the error in with the error and the rest in with resolve, but it does not seem right to me. // I think I am on the right path and have some of the right idea, but am not sure how to implement it.

'use strict';

const fs = require('fs');

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
// const sumLines = (filename) => {
const sumLines = (filename, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      if (err){
        let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
        reject (err);
      } else {
        resolve(sum);
      let lno = 0;
      let sum = lines.split('\n').reduce((prev, curr, i) => {
        lno = i;
      return prev + (+curr);
    }, 0);
    callback(error, sum);
  }
  });
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
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
