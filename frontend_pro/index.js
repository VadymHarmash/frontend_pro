const userNumber = +prompt("Enter your number");

if (isNaN(userNumber) || !userNumber) {
    console.log('It is not a number.');
} else {
    //for
    console.log('For');
    if(userNumber < 2) console.log('Your number is less than 2');
    if(userNumber === 2) console.log('2 is a prime number');

    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            console.log(`${userNumber} is NOT a prime number`);
            break;
        } else {
            if(i === userNumber - 1) {
                console.log(`${userNumber} is a prime number`);
                break;
            }
        }
    }

    // while
    console.log('While');
    let i = 2;
    while (i < userNumber){
        if (userNumber % i === 0) {
            console.log(`${userNumber} is NOT a prime number`);
            break;
        } else {
            if(i === userNumber - 1) {
                console.log(`${userNumber} is a prime number`);
                break;
            }
        }
        i++;
    }
}