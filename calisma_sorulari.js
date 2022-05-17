//ilk çalışma sorusu
let saniyeString= prompt("Bir değer giriniz", );
let saniye= parseInt(saniyeString);

let dakika= parseInt(saniye/60, 10);
let kalanSaniye=saniye % 60;

console.log(typeof saniye);
console.log(`Girdiğiniz ${saniye} değeri: ${dakika} dakika ve ${kalanSaniye} saniyedir`);

//2.çalışma sorusu
let fahrenheitString=prompt("Bir fahrenheit değeri giriniz.");
let fahrenheit= parseInt(fahrenheitString);
let derece= parseInt(celcius= 5/9 * (fahrenheit-32));

console.log(`Girdiğiniz ${fahrenheit} fahrenheit değeri: ${derece} derecedir.`);   

//3.çalışma sorusu
let girilenYil= parseInt(prompt("Bir yıl değeri giriniz"));
let artıkYilMi= (girilenYil%400==0 || girilenYil%4==0 && girilenYil%100!=0);    
console.log("Girdiğiniz "+ girilenYil +" artık yıl mı? "+artıkYilMi+" ");


