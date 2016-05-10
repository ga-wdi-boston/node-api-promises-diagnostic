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
  return new Promise ((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}.then((data) => {
  let result = 0;
  data.split('\n').forEach(function (line) {
    if (typeof line === 'number') {
      console.log(Number(line));
      result = result + Number(line);
    }
  });
  return result;
}).catch(console.error)



//       else {
//         console.error(error);
//         return callback(error, null);
//       }
//     });
//     console.log(result);
//     return callback(null, result);
//   });
//   return callback;
// };
// };

module.exports = {
  sumLines,
};
