// ******************** Dom Etkinlikleri Kullanımı ********************

console.log(" *********************** DOM ETKİNLİKLERİ KULLANIMI SCRIPTLERI BAŞLANGIÇ **********************");

// *** Event Kullanımı ***
let eventItem1 = document.querySelector("#greeting");
eventItem1.addEventListener("click", function(){
    console.log("ilk baslik tıklandı");
});

// *** Eventin Dışardan Fonksiyon ile Kullanımı ***
let eventItem2 = document.querySelector("#greeting2");
eventItem2.addEventListener("mouseover", domClick);

function domClick(){
    console.log("fare ikinci başlığın üzerine geldi");
    console.log("Bu nesne : " , this);
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
    console.log(this.innerHTML = "etkinlik çalışıyor");
}


console.log(" *********************** DOM ETKİNLİKLERİ KULLANIMI SCRIPTLERI BİTİŞ **********************");