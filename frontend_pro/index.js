// const multiple = (firstNum) => {
//     return function (secondNum){
//         return firstNum * secondNum;
//     }
// }

// 2-й спосіб
const multiple = (firstNum) => (secondNum) => firstNum * secondNum;

const result = multiple(5)(2);
console.log(result);