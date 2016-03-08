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
  let pReadFile = (file, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
          reject(err);
        }

        resolve(data);

        let buf = data.split('\n');
        let result = 0;

        buf.reduce( (prev, current) => {
          let curr = parseInt(current);

          if (curr === NaN) {
            console.log("Not a number");
          }

          result += prev + curr
        }, 0);

      });
    }).then(console.log(result)).catch(console.error);
  };
};

main(inFile);

module.exports = main;
