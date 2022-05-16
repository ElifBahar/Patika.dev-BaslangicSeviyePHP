// ******************** Çoklu Koşul Yapısı ********************

console.log(" *********************** ÇOKLU KOŞUL KOŞUL YAPISI SCRIPTLERI BAŞLANGIÇ **********************");

let nickName = prompt("Nickname giriniz : ");
let age = prompt("Yaşınızı giriniz : ");
let drivingLicanceInfo = document.querySelector("#drivingLicanceInfo");

if( nickName && age >= 18){
    drivingLicanceInfo.innerHTML="Ehliyet alabilirsiniz.";
}else if(!nickName){
    drivingLicanceInfo.innerHTML="Nick girmediniz!";
}else if(!(age >= 18)){
    drivingLicanceInfo.innerHTML="Yaş bilgisi girmediniz veya 18 yaşından küçüksünüz!";
}

console.log(" *********************** ÇOKLU KOŞUL YAPISI SCRIPTLERI BİTİŞ **********************");