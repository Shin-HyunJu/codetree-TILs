const fs = require('fs');
const [a , b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let str = '';

for (let i = 2; i < 9; i += 2) {
    str = '';

    for (let j = b; j >= a; j--) {        
        str += `${j} * ${i} = ${j*i}`;
        if (j !== a) {str += ' / ';}
    }

    console.log(str);
}