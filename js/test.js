// function determineWinnerOfFight(map) {
//     let matn = [...map]
//     let wife = 0;
//     let husband = 0;
//     for (let [key, val] of matn) {
//         if (val.me > val.spouse) {
//             husband += 1
//         }
//         else if (val.me < val.spouse) {
//             wife += 1
//         }
//     }
//     if (wife > husband) {
//         return `Xotin yutdi| ${wife}:${husband}`
//     } else if (wife < husband) {
//         return `Er yutdi| ${wife}:${husband}`
//     } else {
//         return `Durang| ${wife}:${husband}`
//     }
// }

// let map1 = new Map([
//     ["round1", { me: 10, spouse: 5, }],
//     ["round2", { me: 5, spouse: 20, }],
//     ["round3", { me: 10, spouse: 10, }],

// ])

// let map2 = new Map([
//     ["round1", { me: 40, spouse: 5, }],
//     ["round2", { me: 11, spouse: 10, }],
//     ["round3", { me: 9, spouse: 10, }],
// ])
// console.log(determineWinnerOfFight(map2));

