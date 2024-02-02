const fs = require("fs");
const [a,b] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ").map(Number);
let big, small, sum = 0;

if (a>b) {
    big=a; small=b;
}else {
    small=a; big=b;
}

for (let i=small; i<=big; i++) {
    if(i%5 === 0) {
        sum += i;
    }
}

console.log(sum)