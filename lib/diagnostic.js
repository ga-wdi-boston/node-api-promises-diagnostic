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

const fs = require('fs');
let sum = 0;

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
// const sumLines = (filename) => {



// not really sure what i am doing, think i need to spend some time going back and doing learnyounode again. i was hoping with some time it would be a little more clear but i'm still feeling confused about it and clearly don't know how to approach this problem.

const sumLines = (filename, callback) => {
  new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      if(err){
        return reject(err);
      } else {
        let lno = 0;
        sum = lines.split('\n').reduce((prev, curr, i) => {
          lno = i;
          return prev + (+curr);
        }, 0);
        let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
        callback(error, sum);
    }
    });
  });
};


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

// let sum = 0;
//
// for (let i = 2; i < process.argv.length; i++) {
//   sum = sum + +process.argv[i];
// }
// console.log(sum);

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
