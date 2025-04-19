// function sumAlpha(set, name = "") {
//     name = name.toUpperCase();
//     let newMap = new Map(set);
//     let sum = 0;
//     for (let i = 0; i < name.length; i++){
//         if (newMap.has(name[i])) {
//             sum+=newMap.get(name[i])
//         }
//     }
//     if (sum <= 60) {
//         return "NOT TOO GOOD"
//     } else if (sum >= 61 && sum <= 300) {
//         return "PRETTY GOOD"
//     } else if (sum >= 301 && sum < 600) {
//         return "VERY GOOD"
//     } else {
//         return "THE BEST"
//     }
// }
// const scores = new Set([
//     ["A", 100],
//     ["B", 14],
//     ["C", 9],
//     ["D", 28],
//     ["E", 145],
//     ["F", 12],
//     ["G", 3],
//     ["H", 10],
//     ["I", 200],
//     ["J", 100],
//     ["K", 114],
//     ["L", 100],
//     ["M", 25],
//     ["N", 450],
//     ["O", 80],
//     ["P", 2],
//     ["Q", 12],
//     ["R", 400],
//     ["S", 113],
//     ["T", 405],
//     ["U", 11],
//     ["V", 10],
//     ["W", 10],
//     ["X", 3],
//     ["Y", 210],
//     ["Z", 23],
// ])
// console.log(sumAlpha(scores,"Muhammadali"));