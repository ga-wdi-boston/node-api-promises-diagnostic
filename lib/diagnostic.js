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
// const stdin = require('/dev/stdin');
// const stdout = require('/dev/stdout');

const sum = () => {
  // let arr = [];
  let bucket = 0;
  for(let i = 0; i < ????split('\n').length; i++){
    if(typeof i === 'number'){
      bucket+=i;
    }else{
      error;
    }
  }
};


const sumLines = (filename) => {
  new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }else{
        resolve(data);
      }
    });
  })
  .then(sum)
  .catch(console.error)
  .then(process.exit);
};

let blanks = require('../data/blanks.txt');

sumLines(blanks);

module.exports = {
  sumLines,
};
