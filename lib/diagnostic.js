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

const stdin = '/dev/stdin';

const stdout = '/dev/stdout';

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

let outFile = process.argv[3] ? process.argv[3] : stdout;

let outFileFlag = outFile === stdout ? 'a' : 'w';

const sumLines = (filename) => {
  let lines = content.split('\n');
  lines.pop();
  new Promise((resolve, reject) => {
    fs.readFile(inFile, { encoding: 'utf8' }, (error, json) => {
        if (error) {
          reject(error);
        } else {
          resolve(json);
        }
      });
    })
  .then((lines) => {
    lines.reduce((a, b) => a + b, 0);
    return lines;
  })
.catch(console.error)
.then(() => console.error('sum file'));
};


//
// lines.forEach((line) => {
//     lines ++;
//   });
// });


module.exports = {
  sumLines,
};
