const fs = require('fs');
let [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
let uniqArr = [];
let duplicateArr= [];

n = Number(n);
arr = arr.split(' ').map(Number);

// 중복 없는 값 list
for (let i = 0; i < n; i++) {
    let uniq = true;
    for(elem of uniqArr) {
        if (elem === arr[i]) {
            uniq = false;
        }
    }
    if (uniq) {
        uniqArr.push(arr[i]);
    } 
}

// 중복 갯수 list 
for (uniqElem of uniqArr) {
    let count = 0;
    for (elem of arr) {
        if (uniqElem === elem) {
            count++;
        }
    }
    duplicateArr.push(count);
}

// 가장 큰 수를 찾는다. 
let max_val = -1;
for (let i = 0; i < uniqArr.length; i++) {
    if (duplicateArr[i] === 1) {
        if (uniqArr[i] > max_val) {
            max_val = uniqArr[i];
        }
    }
}

console.log(max_val);