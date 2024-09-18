let userNumber = +prompt('Attempt 1. number greater than 100');
let attempt = 1;

while (attempt < 10) {
    attempt++;
    if (isNaN(userNumber) || !userNumber) {
        userNumber = prompt(`Attempt ${attempt}. It is not a number.`);
        if (attempt === 10) console.log(isNaN(+userNumber) ? userNumber : +userNumber);
    } else if (userNumber <= 100) {
        userNumber = +prompt(`Attempt ${attempt}. Number is less than 100`);
        if (attempt === 10) console.log(userNumber);
    } else {
        console.log(+userNumber);
        break;
    }
}
