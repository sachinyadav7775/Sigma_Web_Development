const { error } = require("console")
const fs = require("fs")
// console.log(fs)

console.log("starting")

// fs.writeFileSync("sky.txt", "sky is a good boy")
fs.writeFile("sky.txt1", "sky is a cute boy", ()=> {
    console.log("done")
    fs.readFile("sky.txt1" , (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("sky.txt", "sachin", (e,d)=>{
    console.log(d)
})

console.log("ending")