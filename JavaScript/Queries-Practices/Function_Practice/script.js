// function Num(Number, numBer) {
//     if(Number > numBer) {
//         console.log("Greater")
//     } else {
//         console.log("Smaller or Equal")
//     }
// }
// Num(4, 3)

function number(num) {
    if(num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz")
    } else if(num % 3 == 0) {
        console.log("Fizz")
    } else if(num % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(num)
    }
}
number(17)