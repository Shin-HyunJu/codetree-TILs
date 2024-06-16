const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');

n = Number(n);
arr = arr.split(' ').map(Number);

function divEvenNum(arr){
    for(let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] / 2;
        }
    }
}

divEvenNum(arr);

for (let i = 0; i < n; i++) {
    process.stdout.write(arr[i] + ' ');
}