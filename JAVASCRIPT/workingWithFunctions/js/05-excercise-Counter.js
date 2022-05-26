// ******************** Egzersiz - Sayaç Kullanımı ********************

console.log(" *********************** EGZERSİZ - SAYAÇ SCRIPTLERI BAŞLANGIÇ **********************");

// *** Tanımlamalar ***
let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

// *** Event Listenerların Oluşturulması ***
increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);


// *** Fonksiyonun Oluşturulması ***
function clickEvent(){
    console.log(this.id);
    if(this.id == "increase"){
        counterDOM.innerHTML = counter += 1;
    }else {
        counterDOM.innerHTML = counter -= 1;
    }
}
console.log(" *********************** EGZERSİZ - SAYAÇ KULLANIMI SCRIPTLERI BİTİŞ **********************");