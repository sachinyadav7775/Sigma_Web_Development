async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a+b+c
}

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [x, y, ...rest] = [4, 5, 8, 9, 6, 3]
    // console.log(x, y, rest)

    let obj = {
        a: 4,
        b: 8, 
        c:2
    }

    let {a , c} = obj
    console.log(a, c)

    let arr = [4, 5, 3]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
})()