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
  fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
    if(err) {
      fail(err);
    } else {
      success(data);
    }
  });
};

const sumLines = (filename) => {
  /* your response here */
  new Promise((resolve, reject) => {
  const readline = require('readline');
  const rl = readline.createInterface({
  input: fs.createReadStream(filename)
  });
  let lno = 0;
  let sum = 0;

  rli.on('line', (line) => sum += +line);



})
.then()
.catch(console.error);

};

module.exports = {
  sumLines,
};
