// let dataBase = {
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
//     pagination(limit, skip) {
//         console.log(this.students.slice(limit,skip));
//     }
// }

// dataBase.create({ name: "Xamidullo", age: 33, id: 123, tolov: false })
// dataBase.create({ name: "Alisher", age: 27, id: 123, tolov: false })
// dataBase.create({ name: "Dilshod", age: 27, id: 123, tolov: false })
// dataBase.create({ name: "Farxod", age: 27, id: 123, tolov: false })
// dataBase.create({ name: "Baxrom", age: 27, id: 123, tolov: false })
// dataBase.create({ name: "Furqat", age: 27, id: 123, tolov: false })
// dataBase.read()
// dataBase.update("Alisher", { age: 27, id: 999, tolov: true })
// dataBase.read()
// dataBase.findOne("Alisher1")
// dataBase.delete("Xamidullo")
// dataBase.read()
// dataBase.pagination(0,3)

