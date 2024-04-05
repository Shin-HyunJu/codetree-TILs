const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 4; i++) {
    let sum = 0;
    input[i] = input[i].split(' ').map(Number);

    for (j = 0; j < 4; j++) {
        sum += input[i][j];
    } 

    console.log(sum);
}