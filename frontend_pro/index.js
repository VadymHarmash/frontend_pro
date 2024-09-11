const oneDollar = 26;

//for
console.log('For');

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} dollars are equal to ${oneDollar * i} hryvnas`);
}

//while
console.log('While');

let i = 10;

while (i <= 100) {
    console.log(`${i} dollars are equal to ${oneDollar * i} hryvnas`);
    i += 10;
}