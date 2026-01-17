let arr = [3, 4, 8, 6]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr);

let array = [3, 5, 8, 5, 7]

const red = (a, b) => {
    return a*b
}
console.log(array.reduce(red))