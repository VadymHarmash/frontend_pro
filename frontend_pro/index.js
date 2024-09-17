function makeSum() {
    let total = 0;
    return function (num) {
        return total += num;
    }
}

let sum = makeSum();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));