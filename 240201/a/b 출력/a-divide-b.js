const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().split(" ").map(Number);

let result = parseInt(a/b);
result += '.'
a = (a%b)*10;

for(let i=0; i<20; i++){
    let share = parseInt(a/b);
    let rest = a%b;
    a = rest*10;
    result+=share;
}

console.log(result)