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