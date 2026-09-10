// function hello() {
//     let message = "good morning"

//     {
//         let massage = "good bye"
//         console.log("I am hello : " + message)
//     }

//     let c = function hello1() {
//         console.log("I am b " + message)
//     }
//     return c
// }

// hello()

// c = hello()
// c()

// function Closures() {
//     const x = () => {
//         let a = 1
//         console.log(a)
//         const y = () => {
//             // let a = 2
//             console.log(a)
//             const z = () => {
//                 // let a = 8
//                 console.log(a)
//             }
//             z()
//         }
//         a = 477
//         y()
//     }
//     return x
// }

// let a = Closures()
// a()

// function makeMultiplier() {
//     let sum = 
//     console.log("3*a")
// }

// function makeMultiplier(a) {
//     return function(b) {
//         return a * b;
//     }
// }

// const double = makeMultiplier(2);
// double(2); 

// function createCounter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count = count + 1
//             console.log(count)
//         },
//         decrement: function () {
//             count = count - 1
//             console.log(count)
//         }
//     }
// }


// const c = createCounter();

// c.increment(); // 1
// c.increment(); // 2
// c.decrement(); // 1

for (var i = 1; i <= 5; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x);
        }, 1000);
    })(i);
}