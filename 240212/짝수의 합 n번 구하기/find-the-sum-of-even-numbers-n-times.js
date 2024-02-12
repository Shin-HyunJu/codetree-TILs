const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let sum = 0;

for (let i = 1; i <= input[0]; i++) {
    sum = 0;
    let [a,b] = input[i].split(' ').map(Number);

    for(let j = a; j <= b; j++) {
        if (j % 2 === 0) {
            sum += j;
        } 
    }

    console.log(sum);
}