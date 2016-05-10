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

const readFile = (filename, success, fail) => {
  fs.readFile(filename, { encoding: 'utf8' }, (error, json) => {
    if (error) {
      fail(error);
    } else {
      success(json);
    }
  });
};

const sumLines = (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, resolve, reject);
  })
  .then((data) => data.split('\n'))
  .then((array) => array.reduce( (a, b) => a + b))
  .catch(console.error);

};

module.exports = {
  sumLines,
};
