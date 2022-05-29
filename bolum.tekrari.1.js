//Soru1: Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız.
// let birinciSayi = parseInt(prompt("Birinci sayıyı giriniz.", "1"));
// let ikinciSayi = parseInt(prompt("İkinci sayıyı giriniz.", "2"));
// let ucuncuSayi = parseInt(prompt("Üçüncü sayıyı giriniz.","3"));

// let ortalama = (birinciSayi + ikinciSayi + ucuncuSayi)/3;
// alert("Girdiğiniz sayıların ortalaması:" + ortalama);

// Soru2 : Klavyeden kenarları verilen üçgenin çeşidini veren uygulamayı yazınız.
// let birinciKenar = parseInt(prompt("Birinci kenarı giriniz", "1"));
// let ikinciKenar = parseInt(prompt("İkinci kenarı giriniz", "2"));
// let ucuncuKenar = parseInt(prompt("Üçüncü kenarı giriniz", "3"));

// if((birinciKenar==ikinciKenar && birinciKenar==ucuncuKenar)){
//     alert("Bu bir eşkenar üçgendir");
// } else if((birinciKenar != ikinciKenar)&& (birinciKenar!=ucuncuKenar)&& (ikinciKenar!=ucuncuKenar)){
//     alert("Bu bir çeşitkenar üçgendir");
// }else{
//     alert("Bu bir ikizkenar üçgendir");
// }

//Soru3: Klavyeden girilen vize ve final notlarına öğrencinin geçip geçmediğini söyleyen bir uygulama yazınız.(Geçme notu:50, vize:%40, final:%60)
// let vize = parseInt(prompt("Vize notunuzu giriniz","40"));
// let final = parseInt(prompt("Final notunuzunu giriniz","60"));
// let ortalama = vize * 0.4  + final * 0.6 ;
// if(ortalama>=50){
//     alert("Tebrikler geçtiniz." + ortalama);
// }
// else{
//     alert("Dersten kaldınız."+ ortalama);
// }

//Soru4: Klavyeden girilen reading, writing, listening, speaking notlarına öğrencinin geçip geçmediğini gösteren bir uygulama yazınız.(Geçme notu:70, reading:%25, listening:%25, speaking:%25, writing:%25)
// let writing= parseInt(prompt("Writing notunuzu giriniz", "20"));
// let reading= parseInt(prompt("reading notunuzu giriniz","25"));
// let speaking= parseInt(prompt("Speaking notunuzu giriniz","25"));
// let listening= parseInt(prompt("Listening notunuzu giriniz", "25"));
// let ortalama1= writing*0.25 + listening*0.25 + speaking*0.25 + reading*0.25 ;
// if(ortalama1>=70){
//     alert("Tebrikler geçtiniz." + ortalama1);
// }
// else{
//     alert("Seneye tekrar deneyiniz." + ortalama1);
// }


//Soru 5: 1'den 100'e kadar olan sayıların toplamını bulan uygulama yapınız.
// let toplam = 0;
// for(let i = 1; i<100; i++){
//     toplam= toplam + i;
// }
// console.log(toplam);

//Soru 6: Klavyeden girdiğiniz bir sayının faktöriyelini hesaplayınız.
// let sayi= parseInt(prompt("Faktoriyelini hesaplamak istediğiniz sayıyı giriniz.", "1"));    
// let faktoriyel = 1;
// for(let i = 1; i <= sayi, i++;) {
//     faktoriyel= faktoriyel * i;
// }
// console.log(`Girdiğiniz ${sayi} sayısının faktoriyeli ${faktoriyel} sayısıdır.`);

//Soru7: Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyede girilen x ve y değerleri için hesaplayınız.
// x>0, y<0 ise f(x,y)=4x+2y+4
// x>0, y=0 ise f(x,y)=2x-y+3
// x<0, y>0 ise f(x,y)= 3x+4y+3
// let xDegeri= parseInt(prompt("x değerini giriniz.","5"));
// let yDegeri= parseInt(prompt("y değerini giriniz.","5"));

// let islemSonucu=0;

// if(xDegeri>0 && yDegeri<0) {
//     islemSonucu= 4*xDegeri + 2*yDegeri + 4;
// }
// else if(xDegeri>0 && yDegeri==0){
//     islemSonucu= 2*xDegeri - yDegeri + 3;
// }
// else if(xDegeri<0 && yDegeri>0){
//     islemSonucu= 3*xDegeri + 4*yDegeri +3;
// }
// console.log(`x: ${xDegeri} y: ${yDegeri} ve sonuc: ${islemSonucu}`);


//Soru8: 100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.
// let yuzlukSistemdekiNot= parseInt(prompt("Notunuzu giriniz.", "70"));
// let notSiniri= parseInt(yuzlukSistemdekiNot/ 10 );
// console.log("Yüzlük sistemdeki not:" + yuzlukSistemdekiNot + "sınır:" + notSiniri );
// switch(notSiniri){
//     case 10:console.log("Notunuz AA"); break;
//     case 9:console.log("Notunuz AA");break;
//     case 8:console.log("Notunuz AB"); break;
//     case 7:console.log("Notunuz BA"); break;
//     case 6:console.log("Notunuz BB"); break;
//     case 5:console.log("Notunuz CB"); break; 
//     case 4:console.log("Notunuz CC"); break;
//     case 3:console.log("Notunuz DC"); break;
//     case 2:console.log("Notunuz DD"); break;
//     case 1:console.log("Notunuz FF"); break;
// }

//Soru9: Çarpım tablosunu oluşturan bir uygulama yapınız.

// let= yazdirilacakMetin="";
// for (let i=1; i<=10; i++) {
//     for(let j=1; j<=10; j++){
//         yazdirilacakMetin = yazdirilacakMetin + (i+ "*" + j + "=" + (i*j) + "\t")
//     }

    
// }
// console.log(yazdirilacakMetin);
// yazdirilacakMetin="";

//Soru 10: Sıcak soğuk oyunu yapınız.

// let uretilenSayi= parseInt (Math.random() * 100 + 1);
// console.log("Üretilen Sayı"  + uretilenSayi);
// let tahmin= 102;
// let tahminSayisi=0;
// while(tahmin != uretilenSayi){

// tahmin= parseInt(prompt("Bir sayı giriniz"));
// tahminSayisi++;

// if (tahmin == uretilenSayi){
//     console.log("Tebrikler bildiniz");
// }  else if(tahmin<uretilenSayi){
// console.log("Biraz daha çıkınız");}
// else {
//     console.log("Biraz daha in");
// }
// }   

//Soru 11: Kullanıcıdan sürekli olarak sayı alan ve kullanıcı 0a bastığında girdiği sayıların çarpımını gösteren uygulama.

// let girilenSayi=parseInt(prompt("Bir sayı giriniz"));
// let carpimSonucu= 1;

// while(girilenSayi != 0) {
//     carpimSonucu= girilenSayi * carpimSonucu;
//     girilenSayi = prompt("Bir sayı giriniz");
// }
// console.log("Çarpım sonucu:" ,  carpimSonucu);

//Soru 12 : Kullanıcıdan aldığı iki sayıyının en büyük ortak bölenini bulan uygulama yazınız.
    // let sayi1= parseInt(prompt("Birinci Sayıyı giriniz"));
    // let sayi2= parseInt(prompt("İkinci Sayıyı giriniz"));
    // let ebob=1, kontrol=2;
    
    // while(kontrol<=sayi1 && kontrol<=sayi2) {
    //     if(sayi1 % kontrol==0 && sayi2 % kontrol==0){
    //     ebob=kontrol;
    // } kontrol++;
        
    // }

    // if(ebob==1){
    //     console.log("Aralarında asaldır");
    // } else{
    //     console.log("Aralarında asal değildir" ,ebob);
    // }

//Soru 13: Kullanıcıdan aldığınız integer değerine kadar olan tüm asal sayıları yazan programı yazınız.

let girilenSayi = parseInt(prompt("Bir sayı giriniz", "10"));
for(let i=2; i<= girilenSayi; i++) {
    let asalSayiMi= true;

    for(j=2; j<i; j++) {
        if(i%j ==0){
            asalSayiMi= false;
            break;
        }
    }
    if(asalSayiMi==true) {
    console.log(i); }

}

        


