const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let count = 0;

input.forEach(val => {
    val = val.split(" ");
    if(val[0] === 'Y' && Number(val[1])>=37) {
        count+=1;
    } 
});

console.log(count>=2 ? 'E':'N')