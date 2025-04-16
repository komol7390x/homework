// // / TASK -1
// function listContact() {
//     console.log(`\n   Telefon Jadvallar\n`);
//     for (let val of contacts) {
//         console.log(`Ism: ${val.name}\tTel: ${val.tel}`);
//     }
// }
// function addContact(names, phone) {
//     if (!phone.includes("+998")) {
//         return `\nNoto'g'ri format`
//     }
//     if (phone.length < 13) {
//         return `\n13 belgidan kam`
//     }
//     for (let val of contacts) {
//         if (val.name == names) {
//             return `\n${names} foydalanuvchi bor!`
//         }
//     }
//     for (let val of contacts) {
//         if (val.tel == phone) {
//             return `\n${phone} raqami bor!`
//         }
//     }
//     let newContact = {
//         name: names,
//         tel:phone
//     }
//     contacts.push(newContact)
//     return `\n${names} muvaffaqiyatli qo'shildi!\n`
// }
// function searchContact(numbers) {
//     let info ="Topilgan Kontaktlar\n-------------------\n"
//     for (let val of contacts) {
//         if (val.tel.includes(numbers)) {
//             info += "Ism: " + val.name + "\nTel: " + val.tel +"\n-------------------\n"
//         }
//     }
//     console.log(info);
// }
// function deleteContact(deleteCont) {
//     indexName = contacts.findIndex((val) => val.name == deleteCont)
//     indexTel = contacts.findIndex((val) => val.tel == deleteCont)
//     if (indexName !== -1) {
//         contacts.splice(indexName, 1)
//         return `${deleteCont} o'chirildi`
//     }
//     if (indexTel !== -1) {
//         contacts.splice(indexTel, 1)
//         return `${deleteCont} o'chirildi`
//     }
    
// }
// // -----------------------------------------------------------
// let contacts = [
//     { name: "Ali", tel: "+998901234567" },
//     { name: "Vali", tel: "+998911112233" },
//     { name: "Hasan", tel: "+998933335555" },
//     { name: "Husan", tel: "+998935551199" },
//     { name: "Aziz", tel: "+998977778888" },
//     { name: "Shoxrux", tel: "+998935556677" },
//     { name: "Diyor", tel: "+998909090909" },
//     { name: "Sardor", tel: "+998915151515" },
//     { name: "Murod", tel: "+998935577447" },
//     { name: "Islom", tel: "+998999988877" }
// ];
// let ask = ""  //Shu yerdan komandalar beriladi
// info = (`Mavjud komandalar:
// - add: Yangi kontakt qo'shish
// - search: Kontaktni qidirish
// - delete: Kontaktni o'chirish
// - list: Barcha kontaktlarni ko'rsatish
// - help: Mavjud komandalarni ko'rsatish
// - exit: Dasturdan chiqish`)
// console.log(info);
// if (ask == "add") {
//     console.clear();
//     listContact();
//     console.log(addContact("Ali", "+998999988877"));
//     console.log(addContact("Javohir","+998901234587"));
//     listContact();
// }else if (ask == "list") {
//     console.clear();
//     listContact();
// }else if (ask == "search") {
//     console.clear();
//     console.log(searchContact("2"));
// } else if (ask == "delete") {
//     console.clear();
//     console.log(deleteContact("Sardor"));
//     listContact();
// } else if (ask == "help") {
//     console.clear();
//     console.log(info);
// } else if (ask == "exit") {
//     console.clear();
//     console.log("Dasturdan chiqildi");
// }
// ============================================================================
