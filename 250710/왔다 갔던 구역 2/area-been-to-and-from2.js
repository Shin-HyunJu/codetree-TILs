const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1).map(x => x.split(' '));

// console.log(commands);

// Please Write your code here.
let max = 0;
let min = 0;
let now = 0;

for (let i = 0; i < n; i++) {
    if(commands[i][1] === 'R') {
        now += Number(commands[i][0]);
        if(now > max) max = now;
    } else if(commands[i][1] === 'L') {
        now -= Number(commands[i][0]);
        if(now < min) min = now; 
    }
}

let array = new Array(Math.abs(min) + max + 2).fill(0);
let newNow = Math.abs(min) + 1;
let zero = Math.abs(min) + 1;
let count = 0;

for (let i = 0; i < n; i++) {
    if(commands[i][1] === 'R') {
        // console.log('오른쪽', commands[i][0], 'newNow', newNow )

        for (let j = newNow; j < newNow + Number(commands[i][0]); j++){ // 얘는 왜 안됨?
            array[j]++;
        }
        newNow += Number(commands[i][0]);
    } else if(commands[i][1] === 'L') {
        // console.log('왼쪽', commands[i][0], 'newNow', newNow )

        for (let j = newNow; j > newNow - Number(commands[i][0]); j--){
            array[j]++;
        }
        newNow -= Number(commands[i][0]);
    }
    // console.log(array)

}

for(let i = 0; i < n; i++) {
    if (array[i] >= 2) {
        count++;
    }
}


console.log(count);