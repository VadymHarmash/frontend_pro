const arrayWithAllTypes = [1, 2, '3', true, null, 6, 7];

function calculateAverage(arr) {
    const numArr = arr.filter(function (item) {
        return typeof item === 'number';
    });
    let sumOfNumArr = 0;
    for (let i = 0; i < numArr.length; i++) {
        sumOfNumArr += numArr[i];
    }
    return sumOfNumArr / numArr.length;
}

const result = calculateAverage(arrayWithAllTypes);
console.log(result);