let string = prompt("Enter a string");
let arr = prompt("Enter your letters (Enter ' ', if you want to remove spaces)");

function eraseLetters(str, arrOfLetters) {
    if(!str || str === '' || !arrOfLetters || arrOfLetters.length === 0) {
        return 'No string or array. You have no result';
    } else {
        arrOfLetters = arrOfLetters.split('');
        let strArray = str.trim().split('');
        strArray = strArray.filter(function(letter){
            return !arrOfLetters.includes(letter);
        })
        return strArray.join('');
    }
}

const result = eraseLetters(string, arr);
console.log(result);