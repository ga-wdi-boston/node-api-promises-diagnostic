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
  return new Promise((resolve, reject) => {
    fs.readFile(filename, {encoding: "utf8"}, (error, response) => {
      if (error) { reject(error); }
      resolve(response);
    });
  }).then((response) => {
    let array = response.split('\n');
    return array;
  }).then((array) => {
    let sum = array.reduce((prevVal, currentVal) => +prevVal + +currentVal);
    return sum;
  }).catch((error, sum) => {
    if (isNaN(sum)){reject(error)})
});
};

module.exports = {
  sumLines,
};
