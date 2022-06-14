// sayılar dizisindeki tek elemanları bulup başka bir diziye aktarın. (find)
// bu yeni dizinin her bir elemanın karesini alıp başka bir diziye aktarın (map)
// bu dizideki 10dan büyük elemanların toplamını ekrana yazdırın. (reduce)

// const sayilar=[1,2,3,4,5,6,7,8,9];
// function sonucuBul(sayilar){
//     const tekElemanlariIcerenDizi= sayilar.filter(function(sayilar){
//         return sayilar %2 !==0;
//     })
//     console.log("tek elemanlı dizi" + tekElemanlariIcerenDizi);

//     const elemanlarinKareleri = tekElemanlariIcerenDizi.map(function(tekElemanlariIcerenDizi){
//         return tekElemanlariIcerenDizi*tekElemanlariIcerenDizi ;
//     })
//     console.log("sayıların kareleri" + elemanlarinKareleri);

//     const toplam= elemanlarinKareleri.reduce(function(genelToplam,sayilar){
//         if (sayilar>10){
//             return genelToplam= genelToplam+ sayilar
//         }
//         else {
//             return genelToplam
//         }
//     }, 0);
//     return genelToplam;
    
// } console.log(sonucuBul(sayilar));


const sayilar=[1,2,3,4,5,6,7,8,9];
function kısaVersiyon(sayilar){
    return sayilar.filter(sayilar=> sayilar%2!==0)
    .map(sayilar=> sayilar*sayilar)
    .reduce((genelToplam, sayilar)=> sayilar>10 ? genelToplam=genelToplam+sayilar : genelToplam, 0)
}
kısaVersiyon(sayilar)
console.log(kısaVersiyon(sayilar));