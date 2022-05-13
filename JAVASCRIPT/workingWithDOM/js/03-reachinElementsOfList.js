// ******************** liste ögelerine erişme ve listeye yeni ekleme yapma ********************

console.log(" *********************** LİSTE ÖGELERİNE ERİŞME VE EKLEME YAPMA SCRIPTLERI BAŞLANGIÇ **********************");

// *** listedeki elemana ulaşmak ***
let item1 = document.querySelector("ul#list1>li:last-child");
console.log(item1);

// *** listedeki elemanı değiştirmek ***
let item2 = document.querySelector("ul#list1>li:first-child");

console.log("Ögenin ilk hali : ", item2.innerHTML);
item2.innerHTML = "Değişti"
console.log("Ögenin son hali : ", item2.innerHTML);

// *** listeye eleman eklemek -> append ***
let ulDOM = document.querySelector("ul#list1");
let liDOM = document.createElement('li');
liDOM.innerHTML = "Kendi oluşturduğumuz öge (append)";

ulDOM.append(liDOM);


// *** listeye eleman eklemek -> prepend ***
let liDOM2 = document.createElement('li');
liDOM2.innerHTML = "Kendi Oluşturduğumuz Öge İlk Sıra (prepend)";
ulDOM.prepend(liDOM2);

console.log(" *********************** LİSTE ÖGELERİNE ERİŞME VE EKLEME YAPMA SCRIPTLERI BİTİŞ **********************");