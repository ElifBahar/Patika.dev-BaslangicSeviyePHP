// ******************** number veri türü ve aritmetik operatörler ********************

console.log(" *********************** NUMBER VERİ TÜRÜ VE ARİTMETİK OPERATÖRLER SCRIPTLERI BAŞLANGIÇ **********************");

// *** number veri türü tanımlamak ***
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
    "Fiyat:", price, 
    "Kdv Oranı:", tax, 
    "KDV Tutarı:" , priceTax, 
    "Toplam Fiyat:", total
    );


// *** string gelen sayı türünü numbera çevirmek ***
let stringNumber = "11";
console.log("String number :", stringNumber); // Bu aslında string
let newNumber = Number(stringNumber);
console.log("Sayıya dönüştürülmüş hali : ", newNumber); //Sayıya dönüştürülmüş hali

// *** artırma ve azaltma işlemleri ***
let counter = 320;

counter = counter + 1 ; // artırma uzun yöntem
console.log(counter);
counter += 1; // artırma kısa yöntem
console.log(counter);
counter ++; // artırma daha kısa yöntem
console.log(counter);

counter--; //azaltma
console.log(counter);

counter *= 10; //çarp ve eşitle
console.log(counter);

counter /= 10; //böl ve eşitle
console.log(counter);


// *** mod(kalan bulma) işlemleri ***
//sayı tek mi çift mi
console.log( 3 % 2 ); // 1 ise tek 0 ise çift



// *** üs alma ***
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// aşağı yuvarlama (Math.floor)
console.log("Aşağı yuvarlama : ", Math.floor(1.7) );

// yukarı yuvarlama (Math.ceil)
console.log("Yukarı yuvarlama :", Math.ceil(1.7) );

// yakına yuvarlama (Math.round)
console.log("Yakına yuvarlama :", Math.round(1.7) );

console.log(" *********************** NUMBER VERİ TÜRÜ VE ARİTMETİK OPERATÖRLER SCRIPTLERI BİTİŞ **********************");
