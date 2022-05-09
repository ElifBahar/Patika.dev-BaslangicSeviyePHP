// ******************** Veri Türünü Öğrenmek ve Veri Türünü Değiştirmek ********************

console.log(" *********************** DEĞİŞKEN TÜRÜNÜ KONTROLETME VE DEĞİŞTİRME SCRIPTLERI BAŞLANGIÇ **********************");

// *** veri türünü öğrenmek typeof ***
let price1 = 111;
let stringPrice1 = "111";
let hasPassword = true;

console.log( "Price:", typeof(price1) );
console.log( "StringPrice1:", typeof(stringPrice1) );
console.log( "Has Password:", typeof(hasPassword) );


// *** string bilgileri int ve floata dönüştürmek ***
let number1 = "11";
console.log( "number1 :", number1, typeof(number1) );
number1 = parseInt(number1);
console.log( "number1 :", number1, typeof(number1) );

let number2 = "11px";
console.log( "number2 :", number2, typeof(number2) );
number2 = parseInt(number2);
console.log( "number2 :", number2, typeof(number2) );

let number3 = "px11px";
console.log( "number3 :", number3, typeof(number3) );
number3 = parseInt(number3);
console.log( "number3 :", number3, typeof(number3) );

let number4 = "11.4px";
console.log( "number4 :", number4, typeof(number4) );
number4 = parseFloat(number4);
console.log( "number4 :", number4, typeof(number4) );


// *** number veri tipinden stringe dönüştürmek ***
let number5 = 55;
console.log( "number5 :", number5, typeof(number5) );
number5 = number5.toString();
console.log( "number5 :", number5, typeof(number5) );

console.log(" *********************** DEĞİŞKEN TÜRÜNÜ KONTROLETME VE DEĞİŞTİRME SCRIPTLERI BİTİŞ **********************");

