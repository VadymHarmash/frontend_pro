const userNumber = prompt("Enter your number");
const firstNumber = Math.floor(userNumber / 100 % 10);
const secondNumber = Math.floor(userNumber / 10 % 10);
const thirdNumber = userNumber % 10;

if (firstNumber === secondNumber && firstNumber === thirdNumber && secondNumber === thirdNumber) {
    console.log('All numbers are equal');
} else if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
    console.log('The are two of numbers are equal');
} else {
    console.log('All of numbers are different');
};