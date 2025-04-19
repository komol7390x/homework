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
// Task-3
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
//     const maxAver = Math.max(...res.map((val) => val.scores))
//     const topStudent = res.filter((val) => val.scores === maxAver)
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
// ------------------------------------------------------------------------------------
// Task-6
// function mostSpokenLanguages(list, num) {
//     let sortedReturn=[]
//     let res = [...list].sort((a, b) => {
//         const aValue = Object.values(a)[0]
//         const bValue = Object.values(b)[0]
//         return bValue-aValue
//     })
//     for (let i = 0; i < num; i++){
//         sortedReturn.push(res[i])
//     }
//     return sortedReturn
// }
// let countries = new Set([
//     { Russian: 9 },
//     { English: 91 },
//     { French: 45 },
//     { Spanish: 24 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Arabic: 25 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
// ])
// console.log(mostSpokenLanguages(countries,3));
// ------------------------------------------------------------------------------------
// Task-7
// function findOne(user, num) {
//     for (let [key, val] of user) {
//         if (key == num) {
//             if (val.read == true) {
//                 return `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilgan`
//             }
//             else {
//                 return `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilmagan`
//             }
//         }
//     }
//     return "Bunday ID li foydalanuchi topilmadi"
// }
// function findAll(user) {
//     let text = ""
//     for (let [key, val] of user) {
//         if (val.read == true) {
//             text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilgan\n------------------------------\n`
//         }
//         else {
//             text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilmagan\n------------------------------\n`
//         }
//     }
//     return text
// }
// function filterByAuthor(user, writer) {
//     let text = ""
//     for (let [key, val] of user) {
//         if (val.author === writer) {
//             if (val.read == true) {
//                 text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilgan\n------------------------------\n`
//             }
//             else {
//                 text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilmagan\n------------------------------\n`
//             }
//         }
//     }
//     return text
// }
// function filterByreaded(user, id) {
//     let text = ""
//     if (id === true) {
//         for (let [key, val] of user) {
//             if (val.read === id) {
//                 text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilgan\n------------------------------\n`
//             }
//         }
//     } else {
//         for (let [key, val] of user) {
//             if (val.read === id) {
//                 text += `Kitob: ${val.title}\nYozuvchi: ${val.author}\nHolati: O'qilmagan\n------------------------------\n`
//             }
//         }
//     }
//     return text
// }
// function deleteOne(user, id) {
//     let res = user.has(id)
//     if (res == true) {
//         user.delete(id)
//         return `${id} foydalanuvchi o'chirildi`
//     }
//     else {
//         return `${id} foydalanuvchi ro'yhatda yo'q`
//     }

// }
// function deleteMany(user) {
//     user.clear()
//     return `Barcha ro'yhat o'chirildi`
// }
// // ****************************************************************
// const books = new Map([
//     [1, {
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         read: false
//     }],
//     [2, {
//         title: '1984',
//         author: 'George Orwell',
//         read: true
//     }],
//     [3, {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         read: false
//     }],
//     [4, {
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         read: true
//     }],
//     [5, {
//         title: 'The Catcher in the Rye',
//         author: 'J.D. Salinger',
//         read: true
//     }],
//     [6, {
//         title: 'Brave New World',
//         author: 'Aldous Huxley',
//         read: true
//     }],
//     [7, {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         read: false
//     }]
// ]);

// let order = "findone"
// if (order == "findone") {
//     console.log(findOne(books, 3));
// } else if (order == "findall") {
//     console.log(findAll(books));
// } else if (order == "filterbyauthor") {
//     console.log(filterByAuthor(books, "Jane Austen"));
// } else if (order == "filterbyreaded") {
//     console.log(filterByreaded(books, false));
// } else if (order == "deleteone") {
//     console.log(deleteOne(books, 7));
// } else if (order == "deletemany") {
//     console.log(deleteMany(books));
// } else {
//     console.log("Noto'g'ri buyruq kiritildi");
// }
// ------------------------------------------------------------------------------------
// Task-8
// function afterNYears(user, num) {
//     user.forEach((val, key) => {
//         user.set(key,val+num)
//     })
//     for (let [key, value] of user) {
//         console.log(`Ism: ${key}\nAvvalgi yosh: ${value - num} yosh\nHozirgi yosh: ${value} yosh\nQo'shilgan yil: ${num} yil\n---------------------`);
//     }
// }
// let people = new Map([
//     ["Joel" , 32],
//     ["Fred" , 44],
//     ["Reginald" , 65],
//     ["Susan" , 33],
//     ["Julian" , 13] 
// ])
// console.log(afterNYears(people,3));
// ------------------------------------------------------------------------------------
// Task-9
// function removeEntry(user, name) {
//     let res = {...user};
//     delete user[name]
//     return user
// }

// let object = new Map([
//     ["piano",300],
//     ["tv", 100],
//     ["skate",50]
// ])
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
// ------------------------------------------------------------------------------------
