function getUser(id){
    console.log(`${id} kullanıcısı getiriliyor...`);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // console.log("Veritabanından veri okundu.");
            resolve({id: id, ad:"Ahmet"});
        },2000)
    });
}

// getUser(123).then((user)=>{
//     console.log(user);
// })

function getCourses(username){
    // console.log(`${username} kullanıcısının kursları getiriliyor...`);

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Veritabanından veri okundu.");
            resolve(["Kurs1", "Kurs2", "Kurs3"]);
        },2000)
    });
}

// getCourses('ahmet').then((courses)=>{
//     console.log(courses);
// }
// )

getUser(123).then((user)=>{
    getCourses(user.ad).then((courses)=>{
        // console.log(courses);
    })
})
displayCourses()
async function displayCourses(){
    const user = await getUser(123);
    const courses = await getCourses(user.ad);
    console.log(courses);
}