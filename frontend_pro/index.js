const fullNumber = prompt("Please, enter a number")
const firstNumber = Math.floor(fullNumber / 10000 % 10);
const secondNumber = Math.floor(fullNumber / 1000 % 10);
const thirdNumber = Math.floor(fullNumber / 100 % 10);
const fourthNumber = Math.floor(fullNumber / 10 % 10);
const fifthNumber = fullNumber % 10;

console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);