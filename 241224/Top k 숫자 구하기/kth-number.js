const fs = require("fs");
let [num, list] = fs.readFileSync(0).toString().trim().split('\n');

const num2 = Number(num.split(' ')[1]);
list = list.split(' ').map(Number).sort();

console.log(list[num2-1])