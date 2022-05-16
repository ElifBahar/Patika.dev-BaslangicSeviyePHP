// ******************** Karşılaştırma Operatörleri ve Mantıksal Operatörler ********************

console.log(" *********************** KARŞILAŞTIRMA OPERATÖRLERİ ve MANTIKSAL OPERATÖRLER SCRIPTLERI BAŞLANGIÇ **********************");

let price = "100";
console.log("Değişken : ", price);
console.log("Değişkenin türü : ", typeof(price));
console.log("----------");

//////////////// Karşılaştırma Operatörleri START ////////////////

// *** eşitse -> == ***
console.log("== operatörü sadece değer kontrolü yapar. Eşitlik kontrolleri :");
console.log("Değişken 1'e eşit mi : ", price == 1);  //false 
console.log("Değişken 100'e eşit mi : ", price == 100);  // true
console.log("----------");

// *** hem değeri hem türü eşitse -> === ***
console.log("=== operatörü hem değer hem de veri türü kontrolü yapar.");
console.log("Değişkenin değeri ve türü 1'e eşit mi : ", price === 1);  //false
console.log("Değişkenin değeri ve türü 100'e eşit mi : ", price === 100);  //false
console.log("Değişkenin değeri ve türü '100' e eşit mi : ", price === "100");  //true
console.log("----------");


// *** eşit değilse -> != ***
console.log("!= operatörü eşit olmama durumunun kontrolünü yapar.");
console.log("Değişken 1'e eşit değilse : ", price != 1);  //true
console.log("Değişken 100'e eşit değilse : ", price != 100);  //false

let user = "guest";
console.log("User : ", user);
console.log("User misafir değilse : ", user != "guest"); //false
console.log("----------");


// *** küçükse -> < ***
console.log("< operatörü küçük olma durumunun kontrolünü yapar.");
console.log("Değişken 10'dan küçükse : ", price < 10);  //false
console.log("Değişken 1000'den küçükse : ", price < 1000);  //true
console.log("Değişken 100'den küçükse : ", price < 100);  //false
console.log("----------");


// *** küçük veya eşitse -> <= ***
console.log("<= operatörü küçük eşit olma durumunun kontrolünü yapar.");
console.log("Değişken 10'dan küçük eşitse : ", price <= 10);  //false
console.log("Değişken 1000'den küçük eşitse : ", price <= 1000);  //true
console.log("Değişken 100'den küçük eşitse : ", price <= 100);  //true


// *** büyükse -> > ***
console.log("> operatörü büyük olma durumunun kontrolünü yapar.");
console.log("Değişken 10'dan büyükse : ", price > 10);  //true
console.log("Değişken 1000'den büyükse : ", price > 1000);  //false
console.log("Değişken 100'den büyükse : ", price > 100);  //false
console.log("----------");


// *** büyük veya eşitse -> <= ***
console.log(">= operatörü büyük eşit olma durumunun kontrolünü yapar.");
console.log("Değişken 10'dan büyük eşitse : ", price >= 10);  //true
console.log("Değişken 1000'den büyük eşitse : ", price >= 1000);  //false
console.log("Değişken 100'den büyük eşitse : ", price >= 100);  //true
console.log("----------");
//////////////// Karşılaştırma Operatörleri END ////////////////


//////////////// Mantıksal Operatörler START ////////////////

// *** ve mantıksal operatörü -> && ***
console.log("Price : ", price);
console.log("User : ", user);
console.log("Price varsa ve user misafire eşit değilse : (price && user != 'guest') ", price && user != "guest");  //true

price = 0;
user = "admin";
console.log("Price : ", price);
console.log("User : ", user);
console.log("Price sıfırdan büyükse ve user misafire eşit değilse : (price > 0 && user != 'guest') ", price>0 && user != "guest");  //false
console.log("----------");


// *** veya mantıksal operatörü -> || ***
console.log("Price sıfırdan büyükse veya user misafire eşit değilse : (price > 0 || user != 'guest') ", price > 0 || user != "guest")  //true
console.log("----------");


// *** değil mantıksal operatörü -> ! ***
user = "guest";
price = 1;
console.log("User : ", user , "Price : ", price);
console.log("Price sıfırdan büyükse veya user misafire eşit değilsenin değili : (price > 0 || user != 'guest') ", !(price > 0 || user != "guest"))  //false
console.log("----------");

console.log(" *********************** KARŞILAŞTIRMA OPERATÖRLERİ ve MANTIKSAL OPERATÖRLER SCRIPTLERI BİTİŞ **********************");