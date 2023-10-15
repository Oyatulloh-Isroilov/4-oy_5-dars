// yangi yil sovg'asi

// let N = prompt("Sovg'aning narxini kiriting");
// let a = prompt("tong'ich opaning pulini kiriting");
// let b = prompt("o'rtacha opaning pulini kiriting");
// let c = prompt("kichik opaning pulini kiriting");

// let res;

// if (N <= a + b + c) {
//   console.log(N);
//   console.log("onangizga sovg'a olish uchun pul yetarli");
// } else {
//   console.log("pulingiz yetarli emas");
// }

// Omadsiz chipta

// let ChiptaRaqamlari = +prompt("Chiptaning raqamlarini kiriting ");
// let a = ChiptaO;
// let Raqamlar;
// let ChiptaO = "omadli";
// while (i > 0) {
//   Raqamlar = i % 100;
//   if (Raqamlar == 13) {
//     ChiptaO = "omadsiz";
//   }
//   a = Math.trunc(a / 10);
// }
// if (Raqamlar) {
//   console.log("Omadli chipta");
// } else {
//   console.log("Omadsiz chipta");
// }

// 10 ming qadam

// let a = prompt("Alisher necha qadam yurganini kiriting");
// let res;
// let qadam = 10000;
// let foiz = Math.round((a / qadam) * 100);

// if (foiz > 100) {
//   console.log("Alisher 10.000 qadamni bosib o'tib bolgan");
// } else {
//   console.log("Alisher " + a + " qadam bosib o'tdi");
// }

// harorat

// let celsius;
// let kelvin;
// let fahrenheit;
// while (true) {
//   celsius = prompt("haroratni selsiyda kiriting");
//   if (isNaN(celsius)) {
//     alert("haroratni harfda emas sonda kiritiladi");
//   } else if (celsius < -273.15) {
//     alert("selsiy -273.15 °C dan kichik bolmaydi");
//   } else {
//     break;
//   }
// }
// kelvin = Math.round(celsius + 273.15);
// fahrenheit = Math.round(celsius * 1.8 + 32);
// console.log("kelvin: " + kelvin);
// console.log("fanhrenheitda: " + fahrenheit);

// HTTS

// let a = n;
// let counter = 0;
// while (a >= 1) {
//   if (a % 2 == 0) {
//     console.log("NO");
//     break;
//   }
//   counter++;
//   a = Math.trunc(a / 10);
// }

// if (counter % 2 == 1);
// console.log("YES");

// console.log(13579);

// Katta kichik;

// let A = +prompt("Aning qiymatini kiriting");
// let B = +prompt("Bning qiymatini kiriting");
// let res;
// if (A > B) {
//   res = ">";
// } else if (A == B) {
//   res = "=";
// } else {
//   res = "<";
// }
// console.log(A + " " + res + " " + B);

// Kechikan poyezd
//   let t = +prompt("Poyezdni ketadigan vaqtini kiriting");
//   let T = +prompt("Poyezd necha soatga kechikanini kiriting");
//   let h = t + T;
//   if (h > 24) {
//     h -= 24;
//   }
// console.log(h + " soat kech qoldi");

// Azimjoning qo'ylari

// let a = "jami qo'ylarning oyoqlari sonini kiriting";
// let QuloqlarSoni = a / 2;
// console.log("Quloqlarining soni: " + QuloqlarSoni);

// Diagonlar soni

// let N = prompt(
//   "Ko'pburchakning tomonlarini kiriting faqatgina son ko'rinishida"
// );
// let Diagonlar = (N * (N - 3)) / 2;
// console.log("Diagonlar soni: " + Diagonlar);

// Isfandiyor AlGebra darsida

// let n = +prompt("Xning qiymatini kiriting");
// let f = n ** 5 + 8 * n ** 4 - 5 * n ** 3 + 3 * n ** 2 + n - 12;
// console.log(f);

// Sanash vaqti

// let OnliklarSoni = 10;
// let a = prompt("1-sonni kiriting");
// let b = prompt("2-sonni kiriting");
// let vaqt = (Math.abs(a - b) + 1) * OnliklarSoni;
// console.log(vaqt);

// Ikki xonali sonning birinchi raqami

// let a;
// while (true) {
//   a = +prompt("ikki xonali sonni kiriting");
//   if (isNaN(a)) {
//     alert("Son kiriting, soz'lar emas");
//   } else if (a > 99 || 10 > a) {
//     alert("bir xonali son emas ikki xonali son kiriting");
//   } else {
//     break;
//   }
// }
// let OnliklarSoni = Math.trunc(N / 10);
// console.log(OnliklarSoni);

// Oxirgi raqam

// let son = prompt("sonni kiriting");
// while (true) {
//   if (isNaN(son)) {
//     alert("so'z emas son kiriting");
//   } else {
//     break;
//   }
// }
// let oxirgi_son = son % 10;
// console.log(oxirgi_son);
