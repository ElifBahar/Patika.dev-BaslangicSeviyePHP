// ******************** Fonksiyon Kullanımı ********************

console.log(" *********************** İLK FONKSİYON ve KULLANIMI SCRIPTLERI BAŞLANGIÇ **********************");

// *** İlk Fonksiyonumuzu Tanımlamak ***
function hello(){
    console.log("Merhaba");
}

// *** Tanımlanan Fonksiyonun Çağırılması ***
hello();
hello();
hello();


// bir fonsksiyonun içinde başka bir fonksiyonun çağrılması
function helloWorld(){
    console.log("Hello World!");
    hello();
}

helloWorld();








console.log(" *********************** İLK FONKSİYON ve KULLANIMI SCRIPTLERI BİTİŞ **********************");