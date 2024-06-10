const fs = require('fs');
let num = Number(fs.readFileSync(0).toString().trim());

if (num % 2 === 0 && judgement(num)) {
    console.log('Yes');
} else {
    console.log('No')
}

function judgement(n) {
   let a = Math.floor(n/10);
   let b = n % 10;

   return (a+b) % 5 === 0;
}