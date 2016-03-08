// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You *must* use Promises for any asynchronous functions.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let addUpNumbers = (content) => {
  let items = content.split('\n');
  console.log(items);
  let sum = 0;
  items.forEach((item) => {
    if (isNaN(Number(item))) {
      console.log('NaN line detected');
    } else if (item === '') {
      sum +=0;
    } else {
      console.log(item);
      sum += Number(item);
    }
  });
  console.log(sum);
  return sum;
};

let main = (file) => {
return new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
      console.log('file read');
    }
  });
})
.then(addUpNumbers)
.catch(console.log);
};

main(inFile);

module.exports = main;
