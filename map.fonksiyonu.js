const sayilar =[1,2,3,4,5,6]
const yeniSayilar= sayilar.map(function(sayilar){
    return sayilar*2
})
console.log(sayilar);
console.log(yeniSayilar);

const kitaplar=[
    {adi: "1", sayfaSayisi: "100"},
    {adi: "2", sayfaSayisi: "200"},
    {adi: "3", sayfaSayisi: "300"}
]
const sayfaSayisi=kitaplar.map(function(kitaplar){
    return kitaplar.sayfaSayisi
})
console.log(sayfaSayisi);

const sayilar1=[1,2,3,4,5]
function kendiMapYapim(sayilar1, islem){
    const yeniDizi=[]
    for(let i=0; i<sayilar1.length; i++){
        yeniDizi.push(islem(sayilar1[i], i));
    }
    return yeniDizi
}
const yeniDizi= kendiMapYapim(sayilar1, function(sayilar1, i){
    return sayilar1 * 5
})
console.log(yeniDizi);

