import fs from "fs/promises"

let a = await fs.readFile("sky.txt")
let b = await fs.appendFile("sky.txt" , "\n\n\n\n\n\n\n\nAmazing promise")

console.log(a.toString(), b) 