// TASK -1 Parolni Kuchliligi Tekshiruvi
// function checkPassword(str) {
//     let len=str.length
//     if (len < 8) {
//         return "Kuchsiz Parol\nParol 8 belgidan kam!\n"
//     }
//     let xato = "Kuchsiz Parol\n"
//     let katta = "Katta harf yo'q\n"
//     let kichik = "Kichik harf yo'q\n"
//     let son = "Son yo'q\n"
//     for (let i = 0; i < len; i++){
//         if (str[i] >= "A" && str[i] <= "Z") {
//             katta = katta.replace(katta,"")
//             break
//         }
//     }
//     for (let i = 0; i < len; i++) {
//         if (str[i] >= "a" && str[i] <= "z") {
//             kichik = kichik.replace(kichik,"")
//             break
//         }
//     }
//     for (let i = 0; i < len; i++) {
//         str[i] = parseInt(str[i])
//         if (str[i] >= 0 && str[i] <= 9) {
//             son = son.replace(son,"")
//             break
//         }
//     }
//     matn = xato + kichik + katta + son;
//     if ((matn.includes("harf")) || (matn.includes("Son"))) {
//         return matn;
//     }
//     return "Parol kuchli"

// }
// console.log(checkPassword("SalDunaaa1"));
// ----------------------------------------------------------------------------
// TASK -2 Xarid Chekini Hisoblash
// let price = +(prompt("Narx kiriting?"));
// let count = +(prompt("Miqdori kiriting?"));
// if (isNaN(price) ||isNaN(count)) {
//     console.log("Son kiriting!\nNoto'g'ri ma'lumot!")
// }
// let total = price * count
// console.log(`Umumiy narx: ${total} so'm\n`);
// if (total >= 100_000) {
//     console.log(`Chegirma: 10%\nOxirgi narx: ${total*0.9} so'm`);
// } else {
//     console.log(`Chegirma: yo'q\n`);
// }
// ----------------------------------------------------------------------------
// / TASK -3 Matndagi Raqamlarni Almashtirish
// function changeNumber(str) {
//     let str1=""
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(parseInt(str[i]))) {
//             str1+="*"
//         } else {
//             str1+=str[i]
//         }
//     }
//     str=str1
//     return str
// }
// console.log(changeNumber("2023-yil"));
// ----------------------------------------------------------------------------
// / TASK -4 Ism va Familiyani Qisqartirish
// function changeName(lastName, firstName) {
//     if (lastName.length < 1 || firstName < 1) {
//         return "Noto'g'ri format: Ism va familiya kiritilishi kerak"
//     }
//     return `${lastName[0]}. ${firstName}`
// }
// console.log(changeName("Ahmad","Rahimov"));
// ----------------------------------------------------------------------------
// / TASK -5 Vaqtni Soat va Daqiqaga Ajratish
// function changeTime(num) {
//     if (num < 0) {
//         return `Noto'g'ri ma'lumot: Daqiqa manfiy bo'lmasligi kerak!`
//     }
//     if (isNaN(num)) {
//         return `Noto'g'ri ma'lumot: Kiritilgan format son bo'lishi kerak!`
//     }
//     return `${Math.floor(num/60)} soat ${num%60} daqiqa`
// }
// const num=+prompt("Son kiriting!")
// console.log(changeTime(num));
// ----------------------------------------------------------------------------
// / TASK -6 Matndagi Harfni Takrorlash Sonini Hisoblash
// function countAlpha(str="", alpha) {
//     str = str.toLowerCase();
//     let sum = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == alpha) {
//             sum+=1
//         }
//     }
//     return `Natija: ${sum}`
// }
// console.log(countAlpha("Salom Dunyo","o"));
// ----------------------------------------------------------------------------
