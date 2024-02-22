const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr2d = [];
let rowAvg = '', columnAvg = '';
let rowSum = 0, columnSum = Array(4).fill(0), sum = 0;

// 2차원 배열 생성
for (elem of input) {
    elem = elem.split(' ').map(Number);
    arr2d.push(elem);
}

for (let i = 0; i < 2; i++) {
    rowSum = 0;
    for (let j = 0; j < 4; j++) {
        rowSum += arr2d[i][j];
        sum += arr2d[i][j];
        columnSum[j] += arr2d[i][j];
    }
    rowAvg += `${(rowSum/4).toFixed(1)} `;
}

for (elem of columnSum) {
    columnAvg += `${(elem/2).toFixed(1)} `
}

console.log(rowAvg);
console.log(columnAvg)
console.log((sum/8).toFixed(1));