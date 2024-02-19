const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');

n = Number(n);
arr = arr.split(' ').map(Number);

for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if (arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }    
    }   
}

console.log(arr[0], arr[1]);