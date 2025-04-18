// function avergeSalary(set) {
//     if (set.size === 0) {
//         console.log("Xatolik: Xodimlar ro'yxati bo'sh.");
//         return;
//     }
//     let it = [...set].filter((val) => val.department == "IT")
//     let hr = [...set].filter((val) => val.department == "HR")
//     let itAver = [...it].reduce((acc, b) => acc + b.salary, 0) / (it.length)
//     let hrAver = [...hr].reduce((acc, b) => acc + b.salary, 0) / (hr.length)
//     if (itAver > hrAver) {
//         return {
//             department: "IT",
//             averageSalary: itAver,
//             employees:it
//         }
//     } else if (itAver < hrAver) {
//         return {
//             department: "HR",
//             averageSalary: hrAver,
//             employees: hr
//         }
//     } else {
//         return {
//             department: ["IT","HR"],
//             averageSalary: [itAver,hrAver],
//             employees: it,hr
//         }
//     }
    
// }
// const employees = new Set([
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ])
// console.log(avergeSalary(employees));
