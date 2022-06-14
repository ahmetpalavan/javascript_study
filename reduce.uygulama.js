function parantezlerDengeliMi(metin){
    const dizi=metin.split('');


    const sonuc= dizi.reduce(function(previous, karakter){
        if (previous < 0){
            return previous
        }
        if (karakter==="("){
            return ++previous
        }
        else(karakter===')');{
            return --previous
        }
        return previous
    }, 0)
        if (!sonuc){
            console.log(metin + "dengeli bir yapıdadır");
        }
        else{
            console.log(metin + "dengeli bir yapıda değildir");
        }
}

parantezlerDengeliMi('()()()(')