// // const myPromise = new Promise((ahmet,mehmet)=>{
// //     setTimeout(()=>{
// //         // ahmet("Promise çalıştı.");
// //         mehmet({id:1, name:"Mehmet"});
// //     },2000)
// // })

// // myPromise.then((data)=>{
// //     console.log(data);
// // }).catch((err)=>{
// //     console.log(err);
// // })

// function ahmet(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // resolve("Ahmet");
//             const dizi = [];
//             for (let i=0; i<30; i++){
//                 dizi.push(i);
//             }
//             // resolve(dizi);
//             reject("Hata oluştu.");
//         },2000)
//     })
// }

// ahmet()
//     .then((data)=>{console.log(data);})
//     .catch((err)=>{console.log(err);})
//     .finally(()=>{console.log("Finally çalıştı.");})


// const promiseBasarili = Promise.resolve("Başarılı");
// const promiseBasarisiz = Promise.reject("Başarısız");

// promiseBasarili.then((data)=>{console.log(data);})
// promiseBasarisiz
//     .then((err)=>{console.log(err);})
//     .catch((err)=>{console.log(err);})


const a = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("a bitti");
    },2000)
})

const b = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("b bitti");
    },1000)
})

// Promise.all([a,b])
//     .then((data)=>{console.log(data);})
//     .catch((err)=>{console.log(err);})

Promise.race([a,b])
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err);}) 