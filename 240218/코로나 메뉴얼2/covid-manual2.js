const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let countArr = Array(4).fill(0);

for (elem of input) {
    elem = elem.split(' ');
    if (elem[0] === 'Y') {
        if (Number(elem[1]) >= 37) {
            countArr[0]++;
        } else {
            countArr[2]++;
        }
    }else {
        if (Number(elem[1]) >= 37) {
            countArr[1]++;
        } else {
            countArr[3]++;
        }
    }
}

let str = '';
for (let i = 0; i < 4; i++) {
    str += countArr[i] + ' ';
}
if (countArr[0] >= 2) {
        str += 'E';
}
console.log(str);