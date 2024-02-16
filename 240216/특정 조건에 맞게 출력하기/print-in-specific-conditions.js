const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let str = '';

for (element of input) {
    if (element === 0) {
        break;
    } else if (element % 2 !== 0) {
        str += (element + 3) +' ';
    } else {
        str += parseInt((element / 2)) +' ';
    }
}

console.log(str);