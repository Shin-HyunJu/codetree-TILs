const fs = require('fs');
const [a , b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let str = '';

for (let i = 1; i < 10; i++) {
    str = '';

    for (let j = b; j >= a; j -= 2) {        
        str += `${j} * ${i} = ${j*i}`;
        if (j !== a) {str += ' / ';}
    }

    console.log(str);
}