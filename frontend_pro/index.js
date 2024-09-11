const userNumber = +prompt("Enter your number");

if (isNaN(userNumber) || !userNumber) {
    console.log('It is not a number.');
} else {
    //for
    console.log('For');
    for (let i = 0; i < userNumber; i++) {
        if (i ** 2 > userNumber) break;
        console.log(i);
    }

    // while
    console.log('While');
    let i = 0;

    while (i < userNumber) {
        if (i ** 2 > userNumber) break;
        console.log(i);
        i++;
    }
}