let arr = [2, 4, 5, 33, 99, 55]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// });

let obj = {
    a:1,
    b:3,
    c:5
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(element)
}

// for (const element of arr) {
//     console.log(element);     // array print 
// }