const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(`\n`);

if(input[1].includes(input[2])) {
    console.log('Yes');
} else {
    console.log('No')
}