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
  new Promise(function(resolve, reject) {
    fs.readFile(filename, { encoding: 'utf8' }, (error, content) => {
      if (error) {
        reject(error);
      }

      let lines = content.split('\n');
      lines.pop();

      let sum = 0;
      lines.forEach(function(element){
        if (element === " "){
          reject(console.log("Line is blank"));
          return;
        }
        else if (typeof element === 'number'){
          sum += element;
        }else {
          reject(console.log("error"));
          return;
        }
      });
    });

  }).then(resolve(sum));

};

module.exports = {
  sumLines,
};
