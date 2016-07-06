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
  let sum = 0;
  let myPromise = new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if (err) { reject(err); }
      let fileString =  data.toString();
      let fileStrings = fileString.split('\n');
      for (let i = 0; i < fileStrings.length; i++) {
        if (isNaN(fileStrings[i])) {
          reject(new Error('Error!'));
        } else {
          sum += Number(fileStrings[i]);
        }
      }
      resolve(sum);
      }
    );
  });
  return myPromise;
};

module.exports = {
  sumLines,
};
