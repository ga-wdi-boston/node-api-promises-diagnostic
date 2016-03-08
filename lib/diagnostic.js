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

let result = data.split('\n').reduce((previous, current) => {
  let currentNumber = Number(current);
  if (isNaN(currentNumber)) {
    throw "File contains a non-numeric line";
  }

  return previous + currentNumber;
  }, 0);

  pReadFile(inFile, { encoding: 'utf8' })
  .then(console.log(result))
  .catch(console.error);

};

  main(inFile);

module.exports = main;
