const fs = require("fs");
let [n, list] = fs.readFileSync(0).toString().trim().split('\n');
let [str1, str2] = ['', ''];

n = Number(n);
list = list.split(" ").map(Number);

function cmp(prev, cur) {
    return prev - cur;
}

list.sort(cmp);

for(i = 0; i < list.length; i++) {
    str1 += list[i] + " "
}

list.reverse();

for(i = 0; i < list.length; i++) {
    str2 += list[i] + " "
}

console.log(str1);
console.log(str2);