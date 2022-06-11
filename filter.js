const bitkiler=[
    {ad:"uzum", tur:"meyve"},
    {ad:"domates", tur:"meyve"},
    {ad:"hıyar", tur:"sebze"},
    {ad:"biber", tur:"sebze"},
    {ad:"şeftali", tur:"meyve"},
];

const meyveler= bitkiler.filter(function(bitkiler){
    return bitkiler.tur==="meyve"
})
console.log(meyveler);


const sebzeler= bitkiler.filter(function(bitki){
    return bitki.tur==="sebze"
})
console.log(sebzeler);
// function meyveleriBul(){
//     const geciciDizi=[];
//     for(let i=0; i<bitkiler.length; i++){
//     if(bitkiler[i].tur==="meyve"){
//     geciciDizi.push(bitkiler[i]);
//     }
//     }
//         return geciciDizi;
// }
// function sebzeleriBul(){
//     const geciciDizi=[];
//     for(let i=0; i<bitkiler.length; i++){
//     if(bitkiler[i].tur==="sebze"){
//     geciciDizi.push(bitkiler[i]);
//     }
//     }
//         return geciciDizi;
// }
// console.log(meyveleriBul());
// console.log(sebzeleriBul());