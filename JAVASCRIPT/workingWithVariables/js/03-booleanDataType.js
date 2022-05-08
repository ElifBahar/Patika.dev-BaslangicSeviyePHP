// ******************** boolean veri türü ********************

console.log(" *********************** BOOLEAN VERİ TÜRÜ SCRIPTLERI BAŞLANGIÇ **********************");

// *** boolean veri türü tanımlamak ***
let isActive = false; // 0
console.log(isActive);
isActive = true; // 1
console.log(isActive);

console.log( Boolean("11") ); // true
console.log( Boolean("0") ); // true
console.log( Boolean("") ); //false


console.log( Boolean(0) ); // false
console.log( Boolean(-0) ); // false

console.log( Boolean(0 === 0) ); //true

let userName = "user";
console.log( "Kullanıcı adı var mı?" , Boolean(userName.length > 0) ); //true




console.log(" *********************** BOOLEAN VERİ TÜRÜ SCRIPTLERI BİTİŞ **********************");