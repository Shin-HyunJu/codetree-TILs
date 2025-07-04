const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));
console.log(segments)

// Please write your code here.
let array = new Array(n).fill(0);

for (let i = 0; i < k; i++) {
    for (let j = segments[i][0] -1; j <= segments[i][1] - 1; j++) {
        array[j]++;
    }
}

console.log(Math.max(...array));
