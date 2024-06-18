const fs = require('fs');
let inputNum = Number(fs.readFileSync(0).toString().trim());

function printNum(n) {
    if (n === inputNum + 1) {
        process.stdout.write('\n');
        return;
    } 

    process.stdout.write(n + ' ');

    printNum(n + 1);
    
    process.stdout.write(n + ' ');
}



printNum(1)