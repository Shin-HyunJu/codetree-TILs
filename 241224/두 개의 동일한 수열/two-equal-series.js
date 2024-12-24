const fs = require('fs');
let [n, a, b] = fs.readFileSync(0).toString().trim().split('\n');
let answer = "Yes";

n = Number(n);
a = a.trim().split(" ").map(Number).sort((a, b) => a - b);
b = b.trim().split(" ").map(Number).sort((a, b) => a - b);

for(i = 0; i < n; i++) {
    if ( a[i] !== b[i] ) {
        answer = "No";
    }
}

console.log(answer)



