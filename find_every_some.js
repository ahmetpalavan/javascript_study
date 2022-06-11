const kisiler=[
    {id: 1, ad: "ahmet"},
    {id :11, ad: "ahmet1"},
    {id: 111, ad: "ahmet11"},
    {id: 1111, ad: "ahmet111"},
    {id: 2, ad: "ahmet2"},
    {id :22, ad: "ahmet222"},
    {id: 222, ad: "ahmet2222"},

];
const sonuc= kisiler.find(function(kisiler){
    return kisiler.id===11;
})
console.log(sonuc);


const sayilar=[1,2,3,4,5,6,7,8];
const sonuc1= sayilar.every(function(sayilar){
    return sayilar<10
})
console.log(sonuc1);

const sayilar2=[1,2,3,4,5,20];

const sonuc2= sayilar2.some(function(sayilar2){
    return sayilar2 > 10;
});
console.log(sonuc2);
