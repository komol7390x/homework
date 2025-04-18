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
