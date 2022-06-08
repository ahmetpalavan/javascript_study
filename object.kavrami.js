// let ahmet = {
// adi : 'Ahmet',
// soyadi: 'Palavan', 
// yasi: '22',
// evliMi: 'false',
// sevdigiRenkler: 'yeşil'
// }
// console.log(ahmet);
// console.log(ahmet.sevdigiRenkler);
// console.log(ahmet["adi"]);

let selen= {
    adi: "Selen",
    soyadi:"Tekcan",
    yasi: "22",
    evliMi: "false",
    memleketi: "Almanya",
    dogumYiliHesapla: function(){
        this.dogumYili= 2022 - this.yasi
    }
    
}
console.log(selen);
selen.dogumYiliHesapla();
console.log(selen.dogumYili);
selen.soyadi= "yeni soyadi";
selen["soyadi"]= "yeni soyadi";
console.log(selen);
