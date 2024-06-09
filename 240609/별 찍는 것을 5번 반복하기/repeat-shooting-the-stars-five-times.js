function printStar() {
    for (let i=0; i<10; i++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}

let j = 0;

while (j < 5) {
    printStar();
    j++;
}