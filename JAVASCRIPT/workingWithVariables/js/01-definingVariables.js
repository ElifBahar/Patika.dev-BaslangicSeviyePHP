// ******************** var - let - const ile değişken tanımlama ********************

console.log(" *********************** DEĞİŞKEN TANIMLAMA SCRIPTLERI BAŞLANGIÇ **********************");

// *** var ile değişken tanımlamak ***
// var ile dğeişken tanımlama yöntemi artık tercih edilmemektedir.
var serverName = "api.kodluyoruz.org"
console.log(serverName);


// *** let ile değişken tanımlamak ***
// modern yöntemlerde var yerine let ile değişken tanımlama yapılır.
let serverName2; 
console.log(serverName2); 


// *** let ile değişkene bilgi atamak  ***
serverName2 = "https://kodluyoruz.org";
console.log(serverName2);


// *** let ile değişkene bilgi atayarak tanımlamak  ***
let password = "1234";
console.log(password);


// *** değişken ataması yapmadan önce kullanmaya çalışmak  ***
// console.log(fullName); // initilize olmadna önce kullanıldı hatası verir
let fullName = "Bahar Özdoğru"

// console.log(fullname2) // sadece undefined hatası verir
var fullname2 = "Elif Bahar Özdoğru"


// *** let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek  ***
fullName = "Lorem Ipsum Dolor";
console.log(fullName);


// *** let ile tanımlanan değişkeni birleştirme veya ekleme  ***
console.log(fullName + " Test Bilgisi")  // Değişiklik sadece gösterimde etkili, değişken değiştirilmedi

fullName = fullName + " Yeni Bilgi"; // Değişiklik değişkene eklendi.
console.log(fullName)

fullName = "2. Yeni Bilgi" + fullName ; // Değişiklik değişkene eklendi.
console.log(fullName);


// *** const ile değişkeni boş tanımlamaya çalışmak  ***
//const serverPassword; // sadece değişken tanımlandı ama içi boş -> hata verir


// *** const ile değişkeni tanımlamak  ***
const SERVER_PASSWORD  = "abcdfg1234";
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD = "1234" // HATA ! const ile tanımlanan değişken daha sonra değiştirilemez



console.log(" *********************** DEĞİŞKEN TANIMLAMA SCRIPTLERI BİTİŞ **********************");