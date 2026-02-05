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

function Closures() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 8
                console.log(a)
            }
            z()
        }
        a = 477
        y()
    }
    return x
}

let a = Closures()
a()