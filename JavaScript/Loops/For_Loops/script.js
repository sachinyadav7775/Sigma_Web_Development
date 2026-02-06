// console.log("Hey i am a tutorial on loops")

// let n = 1;
// for (let i=0; i<100; i++) {
//     console.log(n + i)
// }

// 1 se 100 Tak Number Print
// let n = 10
// for(let i=1; i<=n; i++) {
//     console.log(i)
// }

// Even Number Print
// let m = 20
// for(i=1; i<=m; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// let object = {
//     name: "Sachin",
//     role: "programmer",
//     company: "pw AI",
// }

// for (const key in object) {
//     const element = object[key];
//     console.log(key,element)
// }

// for (const c of "sachin") {
//     console.log(c)
// }

// let arr = [2, 4, 5, 3, 8, 9];
// let sum = 0;
// for(i=0; i<arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log("Sum:", sum)

// let num = [8, 7, 2, 9, 4];
// for(i=0; i<num.length; i++) {
//     if(num[i] % 2 !== 0) {
//         console.log("Even Number: ",num[i])
//     }else {
//         console.log("Odd Number: ", num[i])
//     }
// }

let matrix = [
    [2, 5, 8],
    [3, 6, 9],
    [1, 4, 7]
];

let sumEven = 0
let sumOdd = 0

for(i=0; i<matrix.length; i++) {
    for(j=0; j<matrix[i].length; j++) {

        let num = matrix[i][j]

        if(matrix[i][j] % 2 == 0) {
            console.log("Even Number: ", num)
            sumEven += num
        } else {
            console.log("Odd Number: ", num)
            sumOdd += num
        }
    }
}

console.log("Even Number Sum:", sumEven)
console.log("Odd Number Sum:", sumOdd)

let Matrix = [
    [10, 5, 8],
    [3, 12, 7],
    [6, 9, 4]
];

let max = Matrix[0][0]
let min = Matrix[0][0]

for(let i=0; i<Matrix.length; i++) {
    for(let j=0; j<Matrix[i].length; j++) {

        let current = Matrix[i][j]

        if (current > max) {
            max = current;
        } 
        if (current < min) {
            min = current;
        }
    }
}

console.log("Largest number:", max);
console.log("Smallest number:", min);