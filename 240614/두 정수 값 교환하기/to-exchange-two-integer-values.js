const fs = require('fs');
let [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function swap(n, m) {
    [n, m] = [m, n];
    return [n, m];
}

[n, m] = swap(n, m);

console.log(n, m)