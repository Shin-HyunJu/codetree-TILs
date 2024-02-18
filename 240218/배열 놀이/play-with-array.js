const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(`\n`);
const [n, q] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

for (let i = 2; i < input.length; i++) {
    input[i] = input[i].split(' ').map(Number);
    switch(input[i][0]) {
        case 1:
            console.log(arr[input[i][1]-1])
        break;
        case 2:
            let ans = arr.indexOf(input[i][1]);
            console.log(ans > 0 ? ans+1 : 0);
        break;
        case 3:
            let str = ''
            for (let j = input[i][1]-1; j < input[i][2]; j++) {
                str += arr[j] + ' ';
            }
            console.log(str);
        break;
    }
}