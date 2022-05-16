// ******************** css class ekleme veya çıkarma ********************

console.log(" *********************** CLASS EKLEME VE ÇIKARMA SCRIPTLERI BAŞLANGIÇ **********************");

// *** ögenin classına ulaşmak ***
let classItem = document.querySelector("#classAddHeader");
console.log(classItem.classList);


// *** ögeye class eklemek ***
classItem.classList.add("text-primary");
console.log(classItem.classList);


// *** ögeye birden fazla class eklemek ***
classItem.classList.add("second-class", "third-class", "forth-class");
console.log(classItem.classList);


// *** ögeden class silmek ***
classItem.classList.remove("text-primary");
console.log(classItem.classList);


// *** ögeden birden fazla class silmek ***
classItem.classList.remove("second-class", "third-class");
console.log(classItem.classList);

console.log(" *********************** CLASS EKLEME VE ÇIKARMA SCRIPTLERI BİTİŞ **********************");