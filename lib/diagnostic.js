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

  let lno = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (error, content) => {
      if (error) { reject(error); }
      resolve(content);
    });
  })
  .then((content) => {
    return content.split('\n');
  })
  .then((content) => {
    return content.reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
  })
  .catch((error) => {
    console.error(error);
    console.log(`line ${lno}: not a number`);
  });
};

module.exports = {
  sumLines,
};
