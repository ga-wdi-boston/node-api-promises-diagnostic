'use strict';

const fs = require('fs');

const heyYall = function (inFile) {
  const promiseHeyYall = function(fileName, options) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, options, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    });
  };
  promiseHeyYall(inFile, { encoding: 'utf8' })
    .then((data) => {
      console.log(data);
      const array = data.split('\n');
      console.log(array);
      array.pop();
      console.log(array);
      array.forEach((name) => {
        console.log(`hey ${name}`);
      });
      console.log(array);
    })
    .catch(console.error);

};
