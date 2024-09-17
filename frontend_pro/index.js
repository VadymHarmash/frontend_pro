let userNumber = +prompt("Attempt 1. number greater then 100");
let attempt = 1;

while (attempt < 10) {
    attempt++;
    if (isNaN(userNumber) || !userNumber) {
        userNumber = +prompt(`Attempt ${attempt}. It is not a number.`);
    } else if (userNumber <= 100) {
        userNumber = +prompt(`Attempt ${attempt}. Number is less then 100`);
    } else {
        console.log(userNumber);
        break
    }

    if(attempt === 10) {
        console.log(userNumber);
        break;
    }
}
