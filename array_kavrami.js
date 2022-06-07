//Verileri bir arada tutan yapılara array dizi kavramı denir.

let futbolTakimlari = ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Trabzonspor"];
futbolTakimlari[4]= "Konyaspor";
futbolTakimlari[10]="Sivasspor"
console.log("4 büyükler:" + futbolTakimlari);
console.log(futbolTakimlari[0]);

for (let i=0; i<futbolTakimlari.length; i++){
    console.log(futbolTakimlari [i]);
}

let arabaMarkalari = ["Audi", "Porsche", "BMW", "Mercedes"];
console.log(arabaMarkalari);
console.log(arabaMarkalari [2]);

let yeniDizi=["Ahmet", "Furkan", "Aliş", "Selimcan"];
for (let oAnkiYeniDizi of yeniDizi){
    console.log(yeniDizi);
}