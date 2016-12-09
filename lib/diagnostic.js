// The following function sums the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// the Promise returned should be rejected.
//

'use strict';

const fs = require('fs');

const stdin = '/data/integers';

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
// const sumLines = (filename) => {
const sumLines = (filename, callback) => {
  return new Promise(function (resolve, reject) {
  fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
    if(error){
      reject(error);
    } else {
      resolve(data);
    }
  });
});
};

sumLines(inFile)
  .then(function(data){
    let lno = 0;
    let sum = lines.split('\n').reduce((prev, curr, i) => {
      lno = i;
      return prev + (+curr);
    }, 0);
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};
};

const sumLinesOfArbitraryLengthFile = (filename, callback) => {
return new Promise(function (resolve, reject) {
  const rl = require('readline');
  const rli = rl.createInterface({
    input: fs.createReadStream(filename),
  });
  if(error){
    reject(error);
  } else {
    resolve(data);
  }
});
});
};

sumLinesOfArbitraryLengthFile(inFile)
.then(function(data){
  let lno = 0;
  let sum = 0;
  rli.on('line', (line) => {
    lno++;
    sum += +line;
  });
  rli.on('close', () => {
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};


module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
