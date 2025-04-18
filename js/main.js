// Task-1
// var climbStairs = function (n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     let a = 1, b = 1;
//     for (let i = 2; i <= n; i++) {
//         let son = a + b;
//         a = b;
//         b = son;
//     }
//     return b;
// };
// ------------------------------------------------------------------------------------
// Task-2
// var fib = function (n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(4));
// ------------------------------------------------------------------------------------
// Task-4
// function returnText(str) {
//     let len = str.length;
//     if (len < 4) {
//         return str
//     }
//     str = str.split(" ")
//     let text = []
//     for (let i = 0; i < str.length; i++){
//         if (str[i].length < 4) {
//             text.push(str[i])
//         }
//         else {
//             text.push(`${str[i][0]}${str[i].length-2}${str[i][str[i].length-1]}`)
//         }
//     }
//         text=text.join(" ")
//         return text
// }
// console.log(returnText("Nodejs"));
// console.log(returnText("Toshkent"));
// console.log(returnText("Oy"));
// console.log(returnText("Every developer likes to mix kubernetes and javascript"));
// ------------------------------------------------------------------------------------
// Task-4
// function highScore(set) {
//     let res = [...set].map((val) => {
//         const total = val.scores.reduce((acc, b) => acc + b, 0)
//         const aver = total / val.scores.length
//         return {name:val.name,scores:aver}
//     })
//     const mmaxAver = Math.max(...res.map((val) => val.scores))
//     const topStudent = res.filter((val) => val.scores === mmaxAver)
//     return topStudent
// }
// const students = new Set([
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] },
//     { name: "Fatix", scores: [100, 100, 100] }
// ]);
// console.log(highScore(students));

// ------------------------------------------------------------------------------------
// Task-5

// ------------------------------------------------------------------------------------
