// ******************** DOM içerisinden öge seçimi ********************

console.log(" *********************** DOM İÇERİSİNDEN ÖGE SEÇİMİ SCRIPTLERI BAŞLANGIÇ **********************");

// *** getElementByTagName ***
let h2 = document.getElementsByTagName('h2');
console.log("getElementByTagName ile geldi : ", h2.title.innerHTML);

// *** getElementById ***
let title = document.getElementById('title');
console.log("getElementById ile geldi : ", title.innerHTML);

title.innerHTML = "Değişen Bilgi";
console.log("ggetElementById ile değişti : ", title.innerHTML);


// *** querySelector ***
let link = document.querySelector("ul#list>li>a");
console.log(link.innerHTML);
link.innerHTML += " Değişti";
console.log(link.innerHTML);

let kodluyoruzLink = document.querySelector("#kodluyoruzLink");
console.log("Kodluyoruz Linki innerHTML :", kodluyoruzLink.innerHTML);
kodluyoruzLink.innerHTML = "kodluyoruz.org";
console.log("Yeni Kodluyoruz linki innerHTML : ", kodluyoruzLink.innerHTML);

// *** querySelector ile element style değiştirme ***
let styleLink = document.querySelector("#styleLink");
styleLink.style.color = "red";

// *** querySelector ile elemente class ekleme ***
let classLink = document.querySelector("#classLink");
classLink.classList.add('btn');


console.log(" *********************** DOM İÇERİSİNDEN ÖGE SEÇİMİ SCRIPTLERI BİTİŞ **********************");