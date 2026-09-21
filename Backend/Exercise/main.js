const express = require('express');
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/company')
app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * arr.length)
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', {Foo: 'Foo'})
})

app.get('/generate', async (req, res) => {
    
    // Clear The Collection Employee
    await Employee.deleteMany({})
    
    // Generate Rendom Data
    for (let index = 0; index < 10; index++) {

        let randomName = ["Sachin", "Sujeet", "Anurag", "Avanish", "Shivam", "Upendra", "Sumit"]
        let randomCity = ["Varanasi", "Delhi", "Mumbai", "Greater Noida", "Goa"]
        let randomLanguage = ["Java", "Python", "React", "JavaScript", "C++"]
        

        let e = await Employee.create({
            name: getRandom(randomName),
            city: getRandom(randomCity),
            language: getRandom(randomLanguage),
            salary: Math.floor(Math.random() * 295800),
            isManager: (Math.random()>0.5?true:false)
        })

    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})