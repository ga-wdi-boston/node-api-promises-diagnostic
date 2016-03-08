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

let main = (file, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, options, (error, content) => {
      if (error) {
        reject(error);
      }
        resolve(content);
    });
  });
};

let splitArray = (array) => {
  return array.split('\n');
};

let reduceArray = (array) => {
  return array.reduce((prev, current) => {
      let num = Number(current);
      if(isNaN(num)) {
        console.error("Sorry there is a line that is not a number.");
      }
      return prev + num;
  }, 0);
};





main(inFile, { encoding: 'utf8' })
.then(splitArray)
.then(reduceArray)
.then(console.log)
.catch(console.error);

module.exports = main;
