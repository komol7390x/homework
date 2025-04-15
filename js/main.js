// HOME WORK
// TASK - 1 Drink Sorting

// function sortDrinks(arr) {
//     return arr.sort((a,b)=>a.price-b.price)
// }

// drinks = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 30 },
//     { name: "alcohol", price: 20 },
//     { name: "apple", price: 60 },
//     { name: "banana", price: 10 }
// ]
// console.log(sortDrinks(drinks));
//------------------------------------------------------------------------
// TASK - 2 Convert Key, Values in an Object to Array
// function toArrey(object="") {
//     arr1 = []
//     let len=object.length
//     for (let key in object) {
//         arr1.push([key,object[key]])
//     }
//     return arr1
// }
// objectToArray={
//     D: 1,
//     B: 2,
//     C: 3
// }
// console.log(toArrey(objectToArray));
//------------------------------------------------------------------------
// TASK - 3 Destructuring Objects X
// let names = []
// let users = [
//     { name: "John", email: "john@example.com" },
//     { name: "Jason", email: "jason@example.com" },
//     { name: "Jeremy", email: "jeremy@example.com" },
//     { name: "Jacob", email: "jacob@example.com" }
// ]
// for (let key in users) {
//     names.push(users[key].name)
// }
// console.log(names);
// 2 - usul
// const name2 = users.map(users => users.name)
// console.log(name2);
//------------------------------------------------------------------------
// TASK - 4 Ageing the Population...
// function func1(obj) {
//     return function (num) {
//         for (let key in obj) {
//             obj[key] += num;
//         }
//         return obj
//     }
// }
// afterNYears = {
//     "Baby": 2,
//     "Child": 8,
//     "Teenager": 15,
//     "Adult": 25,
//     "Elderly": 71
// }
// console.log(func1(afterNYears)(2));
//------------------------------------------------------------------------
// TASK - 5 CRUD DATABASE Simulation application
// function create(user) {
//     ism="Saloh"
//     yosh = "33"
//     user.studentsList[ism] = {
//         name: ism,
//         age: yosh,
//         id: Math.floor(Math.random() * 200) + 1,
//         tolov: true
//     }
//     return user
// }

// function read(name,user) {
//     if (name in user.studentsList) {
//         return user.studentsList[name]
//     } else {
//         return "Bunday ismli odam yoq"
//     }
// }

// function update(name="", user="") {
//     if (!name in user.studentsList) {
//         return "Bunday ismli odam yoq"
//     }
//     user.studentsList[name] = {
//         name: "Jasurbek",
//         age: 27,
//         tolov: false,
//         id: Math.floor(Math.random() * 200) + 1
//     }
//     return user
// }
// function delete1(name, user) {
//     if (user.studentsList && user.studentsList[name]) {
//         delete user.studentsList[name]
//         console.log(`${name} o'chirildi.`);
//     } else {
//         console.log(`${name} topilmadi.`);
//     }
// }

// const database = {
//     studentsList: {
//         'Xamidullo': {
//             name: "Xamidullo",
//             age: 33,
//             id: 123,
//             tolov: false
//         }
//     },
// }
// // console.log(create(database));
// // console.log(read("Saloh", database));
// // console.log(update("Saloh", database));
// // console.log(new delete1("Xamidullo",database));
// // console.log(database);
//------------------------------------------------------------------------
// TASK - 6  Repeating Letters
