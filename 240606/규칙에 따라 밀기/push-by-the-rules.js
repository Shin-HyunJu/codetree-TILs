const fs = require("fs");
let [input, quest] = fs.readFileSync(0).toString().trim().split('\n');

for(let i = 0; i < quest.length; i++) {
    if(quest[i] === 'L') {
        input = input.slice(1) + input.slice(0, 1);
    }else {
        input = input.slice(-1) + input.slice(0, -1);
    }
}

console.log(input);