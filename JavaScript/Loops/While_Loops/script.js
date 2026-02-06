// 1 se 100 Tak Number Print
// let n = 1
// while(n <= 10) {
//     console.log(n)
//     n++
// }

// Even Number Print
// let m = 1;
// while(m <= 20){

//     if(m % 2 == 0) {
//         console.log(m);
//     }
//     m++;
// }

// let arr = [2, 4, 5, 3, 8, 9];
// let sum = 0;
// let a = 0;
// while(a < arr.length) {
//     sum += arr[a]
//     a++
// }
// console.log("Sum:", sum)

// let num = [3, 7, 2, 9, 4];
// let i = 0
// while(i < num.length) {
//     if(num[i] % 2 !== 0) {
//         console.log("Even Number: ",num[i])
//     }else {
//         console.log("Odd Number: ", num[i])
//     }
//     i++
// }

// let matrix = [
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 4, 7]
// ];

// let sumEven = 0
// let sumOdd = 0
// let i = 0;

// while(i < matrix.length){
//     let j = 0;
//     while(j < matrix[i].length){
//         let num = matrix[i][j]

//         if(matrix[i][j] % 2 == 0) {
//             console.log("Even Number: ", num)
//             sumEven += num
//         } else {
//             console.log("Odd Number: ", num)
//             sumOdd += num
            
//         } 
//         j++
//     } 
//     i++
// }
// console.log("Even Number Sum:", sumEven)
// console.log("Odd Number Sum:", sumOdd)

let Matrix = [
    [10, 5, 8],
    [9, 12, 7],
    [6, 32, 4]
];

let max = Matrix[0][0]
let min = Matrix[0][0]
let i = 0

while(i < Matrix.length) {
    let j = 0
    while( j < Matrix[i].length) {

        let current = Matrix[i][j]

        if (current > max) {
            max = current;
        } 
        if (current < min) {
            min = current;
        }
        j++
    }
    i++
}

console.log("Largest number:", max);
console.log("Smallest number:", min);