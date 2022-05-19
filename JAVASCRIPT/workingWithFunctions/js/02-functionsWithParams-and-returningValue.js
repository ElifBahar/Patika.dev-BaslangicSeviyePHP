// ******************** Fonksiyonlarda Parametre ve Fonksiyonlardan Geri Dönüş Almak ********************

console.log(" *********************** FONKSİYONLARDA PARAMETRELER ve FONKSİYONLARDAN GERİ DÖNÜŞ ALMA SCRIPTLERI BAŞLANGIÇ **********************");

// *** TEMEL KURALLAR ***
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir.
// 3: Mümkünse fonksiyonların bağımlılıklarını azaltmak gerekir.

// *** Parametrenin Opsiyonel Olarak Kullanılması ***
function greetings(firstName){
    console.log(`Merhaba ${firstName ? firstName : ""}`) //first name varsa first name yazdır yoksa boş bırak
}
greetings();


// *** Parametrenin Opsiyonel Olarak Kullanılması ***
function greetings1(lastName=""){
    console.log(`Merhaba ${lastName}`);
}
greetings1(); // sadece merhaba
greetings1("Apple") // merhaba apple


// *** Fonksiyondan Değer Döndürülmesi ***
function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`;
    return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
console.log(greetingsInfo);


// *** Fonksiyondan DOM İşlemi ***
function domIDWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info;
}

domIDWriteInfo('greeting','Merhaba');

console.log(" *********************** FONKSİYONLARDA PARAMETRELER ve FONKSİYONLARDAN GERİ DÖNÜŞ ALMA SCRIPTLERI BİTİŞ **********************");