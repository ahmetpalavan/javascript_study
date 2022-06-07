// // let takimlar =["Real Madrid", "Barcelona", "Liverpool"];
// // console.log(takimlar.join(" ^ "));
// // takimlar.push ("Manchester City")
// // console.log(takimlar.join(" ^ "));
// // takimlar.pop()
// // console.log(takimlar);
// // takimlar.shift()
// // console.log(takimlar);

// // let isimler = ["Ahmet" , "Alişan" , "Furkan" , "Selimcan"]
// // console.log(isimler.toString());
// // isimler.unshift("Buğra")
// // console.log(isimler);
// // delete isimler [3]
// // console.log(isimler);

// // //shift baştaki elemanı çıkarır, unshift başa ekler, delete istediğmiz kısmı siler

// // let sayilar= [1, 2 , 3 , 4 , 5 , 6 , 7,]
// // sayilar.splice(7,0,8,9)
// // console.log(sayilar);

// let sayilar = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]
// sayilar.splice(0, 5)
// console.log(sayilar)

let arabaMarkalari= ["audi", "bmw", "porsche", "mercedes", "peugeot", "citroen", "renault", "fiat", "ford", "bentley"]
arabaMarkalari.splice(0, 6);
console.log(arabaMarkalari.toString());

let futbolTakimlari = ["Fb", "gs", "bjk", "ts"]
let futbolTakimlarim= futbolTakimlari.concat(arabaMarkalari);
console.log(futbolTakimlarim);
let yeniDizi= futbolTakimlarim.slice(3, 5);
console.log(yeniDizi);

