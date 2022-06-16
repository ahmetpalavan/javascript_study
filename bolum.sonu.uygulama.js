//soru 1: şehirler diye bir dizi oluşturun.
//her dizi elemanı şehirler ile ilgili bligiler içermelidir.
//bu bilgiler şehrin adı, plaka numarası ve şehrin komşuları içermelidir.
// diziyi oluşturduktan sonra şehirleri zden aya sırala

//soru2: kullanıcıdan alınan değere kadar olan sayılar dizisindeki fibonacci şeklinde yazınız 
// örnek 0 1 1 2 3 5 8 13 21...
// iki sayının toplamı bir sonraki değeri oluşturur.

//soru 3 : öğrenicleri tutan bir dizi oluştur.
//her bir öprenci nesnesinde ad soyad ve id değerleri olmalıdır
//id numarası çift olan öğrencilerin adı ve ve soyadını birleştirilmiş halde tutan diziyi 
//adan zye sırala 
// bunları yaparken map filter sort kullan 
//işlem bittikten sonra kodları arrow functıon ve zincirleme halıne dönüştürün.

//cevap1: 
const sehirler= [{ad:"istanbul", plaka:"34", komsu:["bursa", "kırıklareli"]},
{ad:"izmir", plaka:"35", komsu:["muğla", "aydın"]},
{ad:"ankara", plaka:"6", komsu:["kırıkkale", "eskisehir"]}
];
sehirler.sort(function(a,b){
    return (b.ad>a.ad) ? 1 : (b.ad<a.ad ? -1 : 0)
})
console.log(sehirler);


// cevap 2 :
// function fibonacci(sayi){
//     let sonucDizi= [0,1]
//     for (let i=2; i<sayi, i++;){
//         const oAnHesaplanan=sonucDizi[i]= sonucDizi[i-1] + sonucDizi[i-2]
//         if(oAnHesaplanan<sayi){
//             sonucDizi[i]=oAnHesaplanan;
//         }
        
//     }
//     return sonucDizi
// }
// console.log(fibonacci(7));

//cevap 3:
const ogrenci=[
    {ad:"ahmet", soyad:"palavan", id:1},
    {ad:"furkan", soyad:"tanrıover", id:2},
    {ad:"selimcan", soyad:"sagdıc", id:3},
    {ad:"alisan", soyad:"karadas", id:4},
    {ad:"sezer", soyad:"bengli", id:5},
    {ad:"ekin", soyad:"deniz", id:6},
    {ad:"mehmet", soyad:"saglam", id:7},
    {ad:"serkan", soyad:"yalman", id:8},
    {ad:"yigit", soyad:"aygun", id:9},
]
const idNumarasiCiftOlan= ogrenci.filter(function(ogrenci){
    return ogrenci.id % 2 ===0;
})
console.log(idNumarasiCiftOlan);

const isimler= idNumarasiCiftOlan.map(function(ogrenci){
    return ogrenci.ad + "" + ogrenci.soyad
})
isimler.sort()
console.log(isimler);

const sonuc= ogrenci.filter(ogrenci=>ogrenci.id%2===0)
.map(ogrenci=>ogrenci.ad+ "" + ogrenci.soyad)
.sort()
console.log(sonuc);