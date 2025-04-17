// Task-1
// function numberSplit(num) {
//     const a = Math.floor(num / 2);
//         if (num % 2 != 0) {
//             return [a, a+1];
//         } else {
//             return [a, a];
//         }
// }
// console.log(numberSplit(-9));
// console.log(numberSplit(-8));
// console.log(numberSplit(9));
// console.log(numberSplit(8));
// -------------------------------------------------------------------------------
// Task-2 Sum of Cubes
// function sumOfCubes(array) {
//     let res = array.map((val) => val ** 3).reduce((acum,val)=>acum+val,0)
//     return `Yig'indi: ${res}`
// }
// console.log(sumOfCubes([1, 5, 9]));
// -------------------------------------------------------------------------------
// Task-3 Find the Smallest and Biggest Numbers
// function minMax(array) {
//     let min = Math.min(...array)
//     let max = Math.max(...array)
//     return `Max: ${max}\nMin: ${min}`
// }
// console.log(minMax([2334454, 5]));
// -------------------------------------------------------------------------------
// Task-4 Birinchi toq sonni topish
// function findPrimeNumber(array) {
//     let res = array.filter((val)=>val%2!=0)
//     return res[0]
// }
// console.log(findPrimeNumber([4, 12, 42, 9, 12, 3]));
// -------------------------------------------------------------------------------
// Task-5 
// function func(array) {
//     let sum=0
//     for (let i = 0; i < array[1]; i++){
//         sum+=array[0]
//     }
//     return sum
// }
// console.log(func([3, 4]));
// console.log(func([2, 4]));
// -------------------------------------------------------------------------------
// Task-6
// function returnVowel(array="") {
//     let len = array.length;
//     const unli = "aiuoe"
//     let text=[]
//     for (let i = 0; i < len; i++){
//         array[i]=array[i].toLowerCase()
//         let soz=""
//         for (let k = 0; k < array[i].length; k++){
//             if (unli.includes(array[i][k])) {
//                 soz+=array[i][k]
//             }
//         }
//         text.push(soz)
//     }
//     return text
// }
// console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"]));
// console.log(returnVowel(["Toshkent"]));
// -------------------------------------------------------------------------------
// Task-7
// function formatPhoneNumber(array) {
//     if (array.length != 10) {
//         return "uzunligi noto'gri"
//     }
//     let code = array.slice(0,3).join("")
//     let three = array.slice(3, 6).join("")
//     let four = array.slice(6, 10).join("")
//     return `(${code}) ${three}-${four}`
// }
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// -------------------------------------------------------------------------------
// Task-8 
// function spelling(array) {
//     let text = []
//     let soz = ""
//     for (let i = 0; i < array.length; i++){
//         soz += array[i]
//         text.push(soz)
//     }
//     return text
// }
// console.log(spelling("happy"));
// console.log(spelling("eagerly"));
// -------------------------------------------------------------------------------
// Task-9  Chat Room Status
// function chatroomStatus(array = "") {
//     let len = array.length
//     if (len < 1) {
//         return "no one online"
//     } else if (typeof array==="string") {
//         return `${array} online`
//     } else if (len == 2) {
//         return `${array[0]} and ${array[1]} online`
//     } else {
//         return `${array[0]}, ${array[1]} and ${len-2} more online`
//     }
// }
// console.log(chatroomStatus([]));
// console.log(chatroomStatus("paRIE_to"));
// console.log(chatroomStatus(["s234f", "mailbox2"]));
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));

