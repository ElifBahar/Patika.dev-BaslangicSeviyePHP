// ******************** prompt ile kullanıcıdan bilgi almak ********************

console.log(" *********************** PROMPT ILE KULLANICIDAN BİLGİ ALMA SCRIPTLERI BAŞLANGIÇ **********************");

// *** prompt kullanımı ***
let fullName = prompt("Lütfen adınızı giriniz : "); //içerdeki mesaj sayfadaki uyarının içinde gözükür.
console.log(fullName);


// *** prompt ile alınan bilginin dokümana yazdırılması ***
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red;">${fullName}</small> `



console.log(" *********************** PROMPT ILE KULLANICIDAN BİLGİ ALMA SCRIPTLERI BİTİŞ **********************");