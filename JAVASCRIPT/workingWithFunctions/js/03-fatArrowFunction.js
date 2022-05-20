// ******************** Fat Arrow Fonksiyonu Kullanımı ********************

console.log(" *********************** FAT ARROW KULLANIMI SCRIPTLERI BAŞLANGIÇ **********************");

// *** Normal Fonksiyon Tanımlama ***
function hello(firstName){
    console.log(`Merhaba ${firstName}`);
}

hello("Javascript");


// *** FatArrow Fonksiyon Fonksiyon Tanımlama ***
const helloFunctV1 = (firstName) => { console.log(`Merhaba ${firstName}`); }
helloFunctV1("helloFunctV1");


// *** FatArrow Fonksiyon Fonksiyon Tanımlama Tek Değişken Tek İşlem ***
const helloFunctV2 = firstName =>  console.log(`Merhaba ${firstName}`); 
helloFunctV2("helloFunctV2");


// *** FatArrow Fonksiyon Fonksiyon Tanımlama Çoklu Değişken Tek İşlem ***
const helloFunctV3 = (firstName, lastName) =>  console.log(`Merhaba ${firstName} ${lastName}`); 
helloFunctV3("helloFunctV3" , "last name info");


// *** FatArrow Fonksiyon Fonksiyon Tanımlama Çoklu Değişken Çoklu İşlem ***
const helloFunctV4 = (firstName, lastName) =>  { 
    let info = `Merhaba ${firstName} ${lastName}`;
    console.log(info); 
    return info;
}
helloFunctV4("helloFunctV4" , "Other info");

console.log(" *********************** FAT ARROW KULLANIMI SCRIPTLERI BİTİŞ **********************");