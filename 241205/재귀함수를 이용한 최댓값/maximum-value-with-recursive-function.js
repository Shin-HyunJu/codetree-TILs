const fs = require("fs");
let [n, list] = fs.readFileSync(0).toString().trim().split("\n");

n = Number(n);
list = list.trim().split(' ').map(Number);

function findMax(n) {
    if (n === 1) {
        return list[0];
    }
    return findMax(n-1) > list[n-1] ? findMax(n-1) : list[n-1]; 
}

console.log(findMax(n));