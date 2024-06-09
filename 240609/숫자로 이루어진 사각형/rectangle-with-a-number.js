function printRect(n) {
    let num = 1;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            process.stdout.write(num+" ");
            num++;
            if (num === 10) {
                num = 1;
            } 
        }
        process.stdout.write('\n');
    }
}

const fs = require('fs');
let row = Number(fs.readFileSync(0).toString().trim());

printRect(row);