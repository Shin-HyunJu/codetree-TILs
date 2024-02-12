const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim();

let tempArr = arr.split(' 0');

console.log(tempArr[0].split(' ').reverse().join(' '));