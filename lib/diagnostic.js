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

// change this function to return a Promise
// resolved or rejected as appropriate
// use the following as the new function signature
// const sumLines = (filename) => {
const sumLines = (filename) => {
  return new Promise((resolve, reject)=>{
    fs.readFile(filename, { encoding: 'utf8' }, (error) => {
      if(error){
        reject(error);
      }
      resolve('Success');
  });
});
};

//So, we're making a new promise ^.  Not quite sure where the let statements below go.
//Because, we don't actually want anything happening in the promise, correct?  We want that
//to be as modular as possible?  So the let statements would go in the .then?  Is that right?


sumLines(inFile)
  .then()

//ALL OF THIS as .then(s)?

let lno = 0;
let sum = lines.split('\n').reduce((prev, curr, i) => {
  lno = i;
  return prev + (+curr);
}, 0);
let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
callback(error, sum);

//Which gets to the end and that value (after all the promises execute) goes into next promise? ?



const sumLinesOfArbitraryLengthFile = (filename, callback) => {
  return new Promise((resolve, reject)=>{
    fs.readFile(filename, { encoding: 'utf8' }, (error) => {
      if(error){
        reject(error);
      }
      resolve('Success');
  });
});
};
//Do each one of these objects become a promise?


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
  rli.on('close', () => {
    let error = isNaN(sum) && new Error(`line ${lno}: not a number`);
    callback(error, sum);
  });
};

module.exports = {
  sumLines,
  sumLinesOfArbitraryLengthFile,
};
