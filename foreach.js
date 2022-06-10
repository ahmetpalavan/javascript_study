// let sayilar = [1,2,3,4,5,6,7];
// sayilar.forEach(function(sayilar){
//     console.log(sayilar);
// })


// let sayilar= [1,2,3,23,4,4,65];
// for(let i=0; i<sayilar.length; i++){
//     console.log(sayilar, i);
// }

let sayilar=[1,2,3,4,5];
diziyiYazdir(sayilar, function(değer, index){
    console.log("değer:"  +değer+ " "+"index:"  +  index);
});

function diziyiYazdir(dizi, callback ){
    for(let i=0; i<dizi.length;  i++){
        callback(dizi[i], i )
    }
}
