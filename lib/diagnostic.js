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

let cleanContent = function (content) {
  let number = content.split('\n');
  let clean = number.pop();
  return clean;
};

let eachLineAdd = function (cleanContent) {
  let sum = 0;
  cleanContent.forEach((num) => {
    let actualNumber = +num;

    if (typeof actualNumber === typeof 3) {
      sum += actualNumber;
    } else {
      //throw error;
      //let toNumber = 0;
    }
  });
  console.log(sum);
};



let pReadFile = (filename, options) => {
return new Promise(function(resolve, reject) {
  fs.readFile(filename, options, (error, data) => {
    if (error) {
      reject(error);
    }

    resolve(data);
  });
});
};

pReadFile(inFile, { encoding: 'utf8' })
.then(cleanContent)
//.then(console.log)
.then(eachLineAdd)
.catch(console.error);


};

main(inFile);

module.exports = main;
