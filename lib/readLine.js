'use strict';

const fs = ('fs');
const sumLines = filename =>
new Promise((resolve, reject) => {
  fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
    if(err) {
      reject(err);
    }else{
      resolve(lines);
  }
});
});


module.exports = {
  sumLines
};
