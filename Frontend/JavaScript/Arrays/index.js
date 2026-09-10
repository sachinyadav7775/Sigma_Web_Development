console.log("Hey i am a array");

let arr = [1, 3, 4, 5, 8];
//  index  0, 1, 2, 3, 4

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop())                 // pop ka matlab nikal lo arr ka last element
console.log(arr.push(122))
console.log(arr.shift())               //  shift pop ka bhai hota hai 
console.log(arr.unshift("sujeet"))             //  push upshift ka bhai hota hai 
console.log(arr)

let a1 = [1, 3, 4, 7, 4]
let a2 = [2, 5, 6, 8, 0]
let a3 = [9, 0, 3, 2, 5]
console.log(a2.concat(a1, a3))

let number = [2, 4, 6, 9, 3, 1]
console.log(number.splice(4,6))