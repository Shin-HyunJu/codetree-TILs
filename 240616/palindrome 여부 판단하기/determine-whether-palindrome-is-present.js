const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

function palindrome(a) {
    a = a.split('').reverse().join('');

    return a;
}

if (input === palindrome(input)) {
    process.stdout.write('Yes');
} else {
    process.stdout.write('No');
}