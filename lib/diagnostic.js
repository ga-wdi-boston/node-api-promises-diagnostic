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

let main = (file) => {
    /* your response here */
    return new Promise((resolve, reject) => {
      fs.readFile(file, {encoding: 'utf8'}, (error, data) => {

        if(error) {
          reject(error);
        }

        resolve(data);
      });
    });
};

let splitEm = (data) => {
  return data.split('\n');
};

let driveShip = (data) => {
  let sum = 0;
  data.forEach((element) => {
    let normalizedElement = Number(element);

    if (isNaN(normalizedElement)) {
      throw ('AHHHHH!');
    }

    return sum += normalizedElement;
  });
  console.log(sum);
};

main(inFile)
.then(splitEm)
.then(driveShip)
.catch(console.error);

module.exports = main;
