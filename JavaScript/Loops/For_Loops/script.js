console.log("Hey i am a tutorial on loops")

// let n = 1;
// for (let i=0; i<100; i++) {
//     console.log(n + i)
// }

// 1 se 100 Tak Number Print
let n = 10
for(let i=1; i<=n; i++) {
    console.log(i)
}

// Even Number Print
let m = 20
for(i=1; i<=m; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

let object = {
    name: "Sachin",
    role: "programmer",
    company: "pw AI",
}

for (const key in object) {
    const element = object[key];
    console.log(key,element)
}

for (const c of "sachin") {
    console.log(c)
}