// ******************** string veri türü işlemleri ********************

console.log(" *********************** STRING VERI TURU ISLEMLERI SCRIPTLERI BAŞLANGIÇ **********************");

let email1 = "elif.har94@gmail.com";
let firstName = "bahar";
let lastName = "ÖZDOĞRU";
console.log(`Email Adresi: ${email1}
Adınız: ${firstName}
Soyadınız: ${lastName}`);

// *** string karakter sayısı bulma ***
console.log( "Email adres uzunluğu : " , email1.length );

// *** stringin ilk karakterini bulma ***
console.log( "Email ilk harfi : ", email1[0] );
console.log( "Email ilk harfi : ", email1.charAt(0) );

// *** büyük harf küçük harf dönüştürme ***
let firstNameUpperCase = firstName.toUpperCase(); // büyük harfe çevirme
console.log("Adınız büyük harfle : ", firstNameUpperCase);

let lastNameLowerCase = lastName.toLowerCase(); // küçük harfe çevirme
console.log("Soyadınız küçük harfle : ", lastNameLowerCase);


// *** stringde bilgi arama ve yerini bulmak ->search ***
console.log( email1.search("@") ); //bulunduğu indexi verir
console.log( email1[10] );

console.log( email1.search("abcdfg") ); // olmayan bir şey arandığında -1 döndürür.


// *** stringde belli bir yeri almak -> slice ***
console.log( email1.slice(0,10) );
console.log( email1.slice(email1.search("@")+1, email.length ));


// *** stringde belli bir yeri almak -> indexOf ***
console.log( email1.indexOf(".") );

// *** stringde bilgiyi değiştirmek ***
console.log( email1.replace("gmail.com", "kodluyoruz.org") );

// *** stringde istediğim bilgi var mı? -> includes ***
console.log( email1.includes("dadada") ); // false
console.log( email1.includes("elif") ); // true

// *** stringde istediğim bilgiyle başladı mı bitti mi? -> startsWith , endsWith ***
console.log( email1.startsWith("e") ); //true
console.log( email1.startsWith("elif.") ); //true
console.log( email1.startsWith("efl") ); //false

console.log( email1.endsWith("e") ); //false
console.log( email1.endsWith("m") ); //true
console.log( email1.endsWith("ail.com") ); //true





console.log(" *********************** STRING VERI TURU ISLEMLERI SCRIPTLERI BİTİŞ **********************");
