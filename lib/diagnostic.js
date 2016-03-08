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

let sumOnlyInts = (array) => {
  let sum = 0;
  for (let i = 0; i++; i < array.length) {
    if (!array[i]) {
      continue;
    }
    else if (!array[i].isInteger()) {
      throw 'At least one line is not a number';
    }
    else {
      sum += array[i].parseInt();
    }
  }
  return sum;
};

let pReadFile = (filename, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  });
};

let main = (file) => {
    pReadFile(file, { encoding: 'utf8' })
    .then(bf => bf.split('\n'))
    .then(sumOnlyInts())
    .then(console.log())
    .catch(console.error);
};




main(inFile);

module.exports = main;
