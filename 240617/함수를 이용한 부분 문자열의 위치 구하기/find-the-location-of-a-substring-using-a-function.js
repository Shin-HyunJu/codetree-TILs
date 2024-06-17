const fs = require('fs');
let [targetStr, subStr] = fs.readFileSync(0).toString().trim().split('\n');

function findIndex(elem) {
    return targetStr.indexOf(elem);   
}

console.log(findIndex(subStr));