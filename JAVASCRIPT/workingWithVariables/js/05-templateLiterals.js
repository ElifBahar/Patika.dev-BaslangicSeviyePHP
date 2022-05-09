// ******************** template literals ********************

console.log(" *********************** TEMPLATE LITERALS SCRIPTLERI BAŞLANGIÇ **********************");

let username = "bahar";
let DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;
console.log("Merhaba,", username, "sitemize hoşgeldin", "mail adresin :", email); 

// *** template literals kullanımı ***
let info = `Merhaba ${username}, sitemize hoşgeldin.. 
Mail adresin ${email}
mail adresinin uzunluğu ${email.length}
borcunuz: ${(2+3)*5} TL
günün saat bilgisi : ${new Date().getHours()}`

console.log(info);


console.log(" *********************** TEMPLATE LITERALS SCRIPTLERI BİTİŞ **********************");