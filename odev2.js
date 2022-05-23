let  rastgeleSayi=Math.floor(Math.random()*100+1);
console.log(rastgeleSayi);
function reverse(sayi){
    return sayi.split("").reverse().join("");
}

let girilenSayi= prompt("Lütfen bir sayı giriniz");
let girilenSayininTersi=reverse(girilenSayi);
if(rastgeleSayi==girilenSayi){
    alert("Tebrikler 10000 tl kazandınız.")
}
else if(rastgeleSayi==girilenSayininTersi){
    alert("Tebrikler 5000 tl kazandınız.") }


