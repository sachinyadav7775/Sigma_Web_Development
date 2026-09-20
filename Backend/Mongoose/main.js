import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/Todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo ({
        title: "Hey i am todo",
        desc: "description this of todo",
        isDone: false,
        days: Math.floor(Math.random() * 145 + 1560 * Math.random())
    })
    todo.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({title: todo.title, desc:todo.title})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})