const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

function recursive(n) {
    if (n === 0) return;

    process.stdout.write(n + ' ');

    recursive(n-1)

    process.stdout.write(n + ' ');
}

recursive(n)