// Task - 1 Function yarating u array qabul qilsin va tub sonlarni qaytarsin! >
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// function findPrimes(n) {
//     let tubArray = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             tubArray.push(i);
//         }
//     }
//     return tubArray;
// }
// console.log(findPrimes(20));
// --------------------------------------------------------------------------------------
// Task-2 
// function multiply(array) {
//     return function (son) {
//         res = array.map((val) => val * son)
//         return res
//     }
// }
// console.log(multiply([1, 2, 3])(2));
// console.log(multiply([4, 6, 5])(10));
// console.log(multiply([1, 2, 3])(0));
// --------------------------------------------------------------------------------------
// Task-3
// function findNumber(num='') {
//     let len = num.length
//     for (let i = 0; i <= len; i++){
//         if (!num.includes(i)) {
//             return i
//         }
//     }
// }
// console.log(findNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(findNumber([3, 0, 1]));


