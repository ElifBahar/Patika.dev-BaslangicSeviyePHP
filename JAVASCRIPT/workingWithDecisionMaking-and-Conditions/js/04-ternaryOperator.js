// ******************** Ternary Operatör Yapısı ********************

console.log(" *********************** TERNARY OPERATOR YAPISI SCRIPTLERI BAŞLANGIÇ **********************");

//kullanıcıdan memleket bilgisi al varsa yazdır yoksa bilgi yok yazdır
let city = prompt("Şehir giriniz");
let cityInfo = document.querySelector("#cityInfo");

// ternary kullanımı
// kosul ? doğruysaYapılacakİşlem : yanlışsaYapılacakİşlem

cityInfo.innerHTML = `${city.length > 0 ? city : " Memlleket bilgisi girilmedi."}`


console.log(" *********************** TERNARY OPERATOR YAPISI SCRIPTLERI BİTİŞ **********************");