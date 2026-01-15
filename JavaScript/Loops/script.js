console.log("Hey i am a tutorial on loops");

// let n = 1;

// for (let i=0; i<100; i++) {
//     console.log(n + i);
// }

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

while(n <= 50) {
    console.log(n);
    n++;
}