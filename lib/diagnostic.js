// This script should take a plain text inFile with one number per line, as in
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

let main = (inFile, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(inFile, options, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  });
};

let toStringAndSplitIntoLines = (content) => {
  return content.toString().split('\n');
};

let removeTrailingNewLine = (content) => {
  content.pop();
  return content;
};

let convertToNumbers = (content) => {
  content.forEach((e,i) => content[i] = Number(e));
  return content;
};

let addNumbers = function(content) {
  let sum = 0;
  for (let i = 0; i < content.length; i++) {
    if (isNaN(content[i])) {
      console.error('Contains non-number');
    } else {
      sum += content[i];
    }
  }

  return sum;
};

let logSum = (sum) => {
  return console.log(sum);
};

main(inFile, {encoding: 'utf8' })
.then(toStringAndSplitIntoLines)
.then(removeTrailingNewLine)
.then(convertToNumbers)
.then(addNumbers)
.then(logSum)
.catch(console.error);

module.exports = main;
