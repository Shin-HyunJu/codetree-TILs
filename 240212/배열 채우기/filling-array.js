const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (arr.length < 10) {
    arr.reverse();
    console.log(arr.slice(1).join(' '));
} else {
    console.log(arr.reverse().join(' '));
}