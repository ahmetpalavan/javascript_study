// // // const fonksiyon = function(){
// // //     console.log("merhaba selen");
// // // }
// // // fonksiyon()

// // // let sayi= 10;
// // // const fonk= function(){
// // //     sayi = sayi * 123;
// // //     return sayi
    
// // // }
// // // console.log(fonk(sayi));

// // let myDizi = [3, 5 , 7 ];

// // const diziyiIkiIleCarp= function(dizi){
// //     let geciciDizi=[];
// //     for(let i = 0; i<dizi.length; i++){
// //         geciciDizi[i]= dizi[i] * 2;
// //     }
// //     console.log(geciciDizi);
// // }

// // const diziyiIkiIleBol= function(myDizi){
// //     let geciciDizi=[];
// //     for(let i=0; i<myDizi.length; i++){
// //         geciciDizi[i]=myDizi[i]/2
// //     }
// //     console.log(geciciDizi);
// // }

// // const diziyeUcEKle= function(myDizi){
// //     let geciciDizi=[];
// //     for(let i=0; i<myDizi.length; i++){
// //         geciciDizi[i]=myDizi[i] + 3
// //     }
// //     console.log(geciciDizi);
// // }

// // console.log(myDizi);
// // diziyiIkiIleCarp(myDizi);
// // diziyiIkiIleBol(myDizi);
// // diziyeUcEKle(myDizi);


// let myDizi=[10,20,30];
// const diziyiIkiIleCarp= function(sayi){
//     return sayi * 2
// }
// const diziyiIkiIleBol= function(sayi){
//     return sayi / 2
// }
// const diziyeUcEKle= function(sayi){
//     return sayi +3
// }

// const diziKisaltmasi= function(myDizi, islem){
//     let geciciDizi=[];
//     for(let i=0; i<myDizi.length;i++){
//         geciciDizi[i]= islem(myDizi[i]);
//     }
//     console.log(geciciDizi);
// }


// diziKisaltmasi(myDizi,diziyeUcEKle)
// diziKisaltmasi(myDizi,diziyiIkiIleBol)
// diziKisaltmasi(myDizi,diziyiIkiIleCarp)

function adimiSoyle (ad, soyad){
    console.log("Merhaba"  + ad + " " +soyad);
}
adimiSoyle("Ahmet", "Palavan");
console.log(adimiSoyle);

function adimiBuyukGoster (ad, soyad, callback){
    const mesaj="Merhaba" + ad.toUpperCase() + soyad.toUpperCase();
    callback(mesaj);
}
adimiBuyukGoster("Ahmet", "Palavan", function(mesaj){
    console.log(mesaj);
})