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

// 1. read file
// 2. split lines, reduce

const fs = require('fs');

const sumLines = (filename) => {
  new Promise((resolve, reject)=> {
     fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
       if (error) { reject(error); }
       resolve(data);
     });
   })
   .then((data)=>{
     let lno = 0;
     let sum = data.split('\n').reduce((prev, curr, i) => {
       lno = i;
       if (isNaN(curr)){
         throw Error('Not a number');
       }
       return prev + (+curr);
     }, 0);
     console.log(sum)
   })
   .catch((error,data)=>{
     console.error(error.stack);
   })
};

sumLines('data/integers.txt');


module.exports = {
  sumLines,
};



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
