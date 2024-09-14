const arr = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item){
    const newArray = array.filter(function (newArrayItem){
        return newArrayItem !== item;
    });
    array.length = 0;
    for(let i = 0; i < newArray.length; i++){
        array.push(newArray[i]);
    }
}

console.log(arr);
removeElement(arr, 7);
console.log(arr);
removeElement(arr, 5);
console.log(arr);
removeElement(arr, 2);
console.log(arr);