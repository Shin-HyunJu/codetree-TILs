const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let i = 0;

while (true) {
    let [width, length, letter] = input[i].split(" "); 
    console.log(width*length);
    if (letter === 'C') {
        break;
    }
    i++;
}