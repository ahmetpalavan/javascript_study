const sayilar=[1,2,3,4,5,6];
// const sonuc= sayilar.reduce(function(toplam,curr,index){
//     return toplam= toplam + curr
// }, 0 );
// console.log(sonuc);

// const sonuc1 = sayilar.map(function(sayilar){
//     return sayilar * 2
// })
// console.log(sonuc1);


// const sayilar2=[1,2,3,4,5,6,7,8,9];
// const yeniDiziWithReduce=sayilar2.reduce(function(dizininOncekiHali, oAnKiHali){
//     dizininOncekiHali.push(oAnKiHali*2)
//     return dizininOncekiHali
// },[])
// console.log(yeniDiziWithReduce);

// const yeniDizi = sayilar.filter(function(sayilar, index){
//     return sayilar>3;
// });
// console.log(yeniDizi);

const sayilar1=[1,2,3,4,5,6];
const yeniDiziWithReduce=sayilar1.reduce(function(pre,sayilar1){
    if(sayilar1>4){
        pre.push(sayilar1)
    }
    return pre
},[])
console.log(yeniDiziWithReduce);

const sayilar2=[1,2,3,56,7,2,9,11];
const bulunanElemanWithReduce = sayilar2.reduce(function(pre,sayilar2, index){
    console.log(pre,sayilar2,index);
    if(sayilar2===7){
        return sayilar2;}
        else{
            return pre;
        }
}
,0)
console.log(bulunanElemanWithReduce);