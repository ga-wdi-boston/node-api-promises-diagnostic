'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let main = (file) => {
  fs.readFile(file, { encoding: 'utf8' }, (error, data) => {
    if (error) {
      console.error(error);
    }

    let result = data.split('\n').reduce((previous, current) => {
      let currentNumber = Number(current);

      if (isNaN(currentNumber)) {
        throw "File contains a non-numeric line";
      }

      return previous + currentNumber;
    }, 0);

    console.log(result);
  });
};

main(inFile);

module.exports = main;
