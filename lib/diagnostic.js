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
  // create promise for reading file
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

  // split the lines into an array
  let splitLines = (content) => {
    let lines = content.split('\n');
    lines.pop();
    return lines;
  };

  // convert one string into an integer, the add it to the sum
  // (called as reduce callback)
  let convertStringAndAdd = (theSum, string) => {
    let num = Number(string);

    if (!string) {} // ignore if blank line
    else if (typeof num === 'number') { // add to sum if number
      theSum += num;
    } else {
      throw "File contains a non-numeric line"; // throw error if non-numeric
    }

    return theSum;
  };

  // log the sum
  let logSum = (theSum) => {
    console.log(theSum);
  };

  // Call the asynchronous function, which makes use of a promise to make
  // the code super-readable
  pReadFile(inFile, { encoding: 'utf8' })
  .then(splitLines)
  .then(lineArray => lineArray.reduce(convertStringAndAdd, 0))
  .then(logSum)
  .catch(console.error);
};

main(inFile);

module.exports = main;
