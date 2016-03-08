// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You *must* use Promises for any asynchronous functions.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let sum = 0;

let main = (file) => {
  let pReadFile = (file, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, options, (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  };

  let splitIntoLines = (content) => {
    return content.split('\n');
  };

  let addToSum = (line) => {
    sum += Number(line);
  };

  let printSum = (sum) => {
    console.log(sum);
  };

  pReadFile(inFile, { encoding: 'utf8' })
  .then(splitIntoLines)
  .then(lines => lines.forEach(addToSum))
  .then(printSum)
  .catch(console.error);
};


main(inFile);

module.exports = main;
