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
//
// const sumLinesOfArbitraryLengthFile = (filename, callback) => {
//   const rl = require('readline');
//   const rli = rl.createInterface({
//     input: fs.createReadStream(filename),
//   });
//   let lno = 0;
//   let sum = 0;
//   rli.on('line', (line) => {
//     lno++;
//     sum += +line;
//   });
//   rli.on('close', () => {
//     let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
//     callback(error, sum);
//   });
// };

// Diagnostic Response

const stdin = '/dev/stdin';
const stdout = '/dev/stdout';

let filepath = process.argv[2];
let inFile = process.argv[2] === '-' ? stdin : process.argv[2];
let outFile = process.argv[3] ? process.argv[3] : stdout;
let outFileFlag = outFile === stdout ? 'a' : 'w';

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
        // let lines = data.split('\n');

      }
    });
  })();
};

// const writeFile = (filepath, contents, options) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filepath, contents, options, error => {
//       if (error) {
//         reject(error);
//       }
//     });
//   });
// };

// clean up the array by removing the empty line
let lines = data.split('\n');


readFile(inFile)
.then(console.log(inFile))
// .then(inFILE.parse)
// .then(pojo => pojo) // do something useful here instead
// .then(pojo => JSON.stringify(pojo, null, 2))
// .then(json => writeFile(outFile, json, { flag: outFileFlag }))
.catch(console.error)
;


// module.exports = {
//   sumLines,
//   sumLinesOfArbitraryLengthFile,
// };
