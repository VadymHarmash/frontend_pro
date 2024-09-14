const arr = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item){
    return array.filter(function (newArrayItem){
        return newArrayItem !== item;
    });
}

const result = removeElement(arr, 7);
console.log(result);