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
// TASK - 5 CRUD DATABASE Simulation application
let dataBase = {
//     students: [],
//     read() {
//         console.log(this.students);
//     },
//     create(user) {
//         let find = this.students.filter((val) => val.name == user.name);
//         if (find.length) {
//             console.log(`Bu ${user.name} avval qo'shilgan`);
//             return 0
//         }
//         this.students.push(user)
//         console.log(`${user.name} muaffaqiyatli qo'shildi`);
//     },
//     update(name, user) {
//         let findIndex = this.students.findIndex((val) => val.name == name);
//         if (findIndex == -1) {
//             console.log(`${name} bunday foydalanuvchi topilmadi`);
//             return 0;
//         }
//         this.students[findIndex] = {
//             ...this.students[findIndex],
//             ...user
//         };
//         console.log(`${name} ma'lumot yangilandi`);
//     },
//     findOne(name) {
//         findName = this.students.findIndex((val) => val.name == name)
//         if (findName !== -1) {
//             console.log(`${name} topildi`);
//             return 0
//         }
//         console.log(`${name} bunday user yo'q`);
//     },
//     delete(name) {
//         findName = this.students.findIndex((val) => val.name == name)
//         if (findName === -1) {
//             console.log(`${name} topilmadi`);
//             return 0
//         }
//         this.students = this.students.filter((val) => val.name != name);
//         console.log("User o'chirildi");
//     },
// }

// dataBase.create({ name: "Xamidullo", age: 33, id: 123, tolov: false })
// dataBase.create({ name: "Alisher", age: 27, id: 123, tolov: false })
// dataBase.read()
// dataBase.update("Alisher", { age: 27, id: 999, tolov: true })
// dataBase.read()
// dataBase.findOne("Alisher1")
// dataBase.delete("Xamidullo")
// dataBase.read()

//------------------------------------------------------------------------
// TASK - 6 Repeating Letters
// function double(str = "") {
//     if (typeof str!=='string') {
//         return str
//     }
//     text=[]
//     str = str.split("")
//     len = str.length
//     for (let i = 0; i < len; i++){
//         text.push(str[i]);
//         text.push(str[i]);
//     }
//     str = text.join("")
//     return str
// }
// console.log(double("1234!_ "));
// console.log(double("String"));
// console.log(double("Hello World!"));
// console.log(double(12345));
//------------------------------------------------------------------------
// TASK - 7 Check If It's a Title String
// function checkTitle(str='') {
//     str = str.split(" ")
//     let len = str.length;
//     for (let i = 0; i < len; i++){
//         a = str[i][0].toUpperCase()
//         if (a !== str[i][0]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(checkTitle("A Mind Boggling Achievement"));
// console.log(checkTitle("Water is transparent"));
//------------------------------------------------------------------------
// TASK - 8 First Unique Character in a String
// var firstUniqChar = function (s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//             return i
//         }
//     }
//     return -1
// };
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("aabb"));
//------------------------------------------------------------------------
// TASK - 9 Add Strings
// var addStrings = function (num1, num2) {
//     res = String(parseFloat(num1) + parseFloat(num2))
//     return res
// };
// console.log(addStrings("11", "123"));
