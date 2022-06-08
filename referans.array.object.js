// primitive

let yas= 32;
let yeniYas = yas;
yas=40;
console.log(yas, yeniYas);

let isim = "ahmet";
let yeniIsim= isim;
isim= "selen";
console.log(isim, yeniIsim);

//referans tipli array object
let isimler = ["ahmet", "selen"]
let yeniIsim1 = isimler;
isimler = ["ahmet", "selen"]
isimler.push=("selimcan")
console.log(isimler, yeniIsim1);

