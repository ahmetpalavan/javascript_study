const isimler =['ahmet', 'furkan', 'selim', 'alişan'];
// const adanZyeSiralama= isimler.sort()
// console.log(isimler);
// console.log(adanZyeSiralama);

// const zdenAyaSiralama=isimler.reverse()
// console.log(zdenAyaSiralama);

const kisa= isimler.sort().reverse()
console.log(kisa);


const sayilar=[1,50,2,41,41,84,8,35,3]
const sirali=sayilar.sort(function(a,b){
    return a - b
})
console.log(sirali);

const sirali1=sayilar.sort(function(a,b){
    return b-a
})
console.log(sirali1);


const ogrenciler=[
    {id:12, isim:"ahmet", yas: 22},
    {id:15, isim:"furkan", yas: 22},
    {id:25, isim:"selimcan", yas: 22},
    {id:48, isim:"alisan", yas: 22},
    {id:36, isim:"ekin deniz", yas: 22},
    {id:66, isim:"sezer", yas: 22},
]
        ogrenciler.sort(function(a,b){
            return b.id - a.id
        })
        console.log(ogrenciler);

        ogrenciler.sort(function(a,b){
            return (a.isim > b.isim ) ? 1 : (a.isim<b.isim ? -1 : 0) 
        })
       





