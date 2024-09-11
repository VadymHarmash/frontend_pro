//for
console.log('For');
let finalString = '';

for (let i = 20; i <= 30; i += 0.5) {
    finalString += `${i} `;
}
console.log(`${finalString.trim()}`);

//while
console.log('While');
finalString = '';

let i = 20;

while (i <= 30) {
    finalString += `${i} `;
    i += 0.5;
}
console.log(`${finalString.trim()}`);
