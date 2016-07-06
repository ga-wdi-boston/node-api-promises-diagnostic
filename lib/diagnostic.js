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
    fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
      if (err) { reject(err); }
      resolve(lines);
      // console.log(lines);
    });
  })


.then((lines) => {
  let arr = lines.split('\n')
  let intArr = [];
  arr.forEach((num) =>
    {
      intArr.push(parseInt(num));
    })
  // console.log(intArr);
  intArr.pop();
  // console.log(intArr);
  let sum = 0;
  intArr.forEach((int) =>
    {
      sum = sum + int;
    })
    console.log(sum);
    return sum;
})


let error = isNaN(sum); 

.catch((error) => {
  console.error(error.stack);
});
};

sumLines('./data/integers.txt')

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
