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

const sumLines = (filename, callback) => {
  new Promise((resolve,reject)=>{
    if (error === null) {
      fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
        let lno = 0;
        let sum = lines.split('\n').reduce((prev, curr, i) => {
          lno = i;
        resolve(prev + (+curr));
        });
      })
    }else {
      reject(console.error(`line ${lno}: not a number`);)
    }
  }).then(()=>callback(error, sum);)
};

const sumLinesOfArbitraryLengthFile = (filename, callback) => {
  new Promise((resolve,reject)=>{
    if(error===null){
      const rl = require('readline');
      const rli = rl.createInterface({
        input: fs.createReadStream(filename),
      });
      let lno = 0;
      let sum = 0;
      rli.on('line', (line) => {
        lno++;
        sum += +line;
      });
    }else{
      reject(console.error(`line ${lno}: not a number`);)
    }
  }).then(()=>callback(error, sum);)
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
