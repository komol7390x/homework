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