// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let i = 1
// while(i <= 10) {
//     console.log(i)
//     i++
// }

// for(i=1; i<=20; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// let i = 1;

// while(i <= 20){

//     if(i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// odd number print
// let a = 20
// for(i=1; i<=a; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
// }

// let i = 1
// while(i <= a) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }

// let arr = [2, 4, 5, 3, 8, 9];
// let sum = 0;
// for(i=0; i<arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log("Sum:", sum)

// let a = 0;
// while(a < arr.length) {
//     sum += arr[a]
//     a++
// }
// console.log("Sum:", sum)

// let num = [3, 7, 2, 9, 4];
// for(i=0; i<num.length; i++) {
//     if(num[i] % 2 !== 0) {
//         console.log(num[i])
//     }
// }

// let i = 0
// while(i < num.length) {
//     if(num[i] % 2 !== 0) {
//         console.log(num[i])
//     }
//     i++
// }

let matrix = [
    [2, 5, 8],
    [3, 6, 9],
    [1, 4, 7]
];

let sumEven = 0
let sumOdd = 0

// for(i=0; i<matrix.length; i++) {
//     for(j=0; j<matrix[i].length; j++) {

//         let num = matrix[i][j]

//         if(matrix[i][j] % 2 == 0) {
//             console.log("Even Number: ", num)
//             sumEven += num
//         } else {
//             console.log("Odd Number: ", num)
//             sumOdd += num
//         }
//     }
// }

let i = 0;

while(i < matrix.length){
    let j = 0;
    while(j < matrix[i].length){
        let num = matrix[i][j]

        if(matrix[i][j] % 2 == 0) {
            console.log("Even Number: ", num)
            sumEven += num
        } else {
            console.log("Odd Number: ", num)
            sumOdd += num
        } 
        j++
    } 
    i++
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