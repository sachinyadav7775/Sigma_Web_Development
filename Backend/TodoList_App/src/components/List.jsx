import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {RiDeleteBinLine} from '@remixicon/react'
import { FaEdit } from "react-icons/fa";

uuidv4(); 


const List = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setShowFinished] = useState(true)

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if(todoString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
        }
    }, [])
    
    
    const saveToLs = (params) => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleAdd = () => {
        setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
        setTodo("")
        saveToLs()
    }

    const toggleFinished = (e) => {
        setShowFinished(!showFinished)
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i=>i.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item=>{
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLs()
    }

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item=>{
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLs()
    }
    
    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name
        let index = todos.findIndex(item=>{
            return item.id === id
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
        saveToLs()
    }

    return (

        <div className='mx-auto my-5 ruonded-xl p-5 bg-violet-200 min-h-[85vh]'>

            <div className='addTodo my-5'>
                <h2 className='text-lg font-bold'>Add Todos</h2>
                <input
                    type="text"
                    value={todo}
                    onChange={handleChange} 
                    placeholder='Add Todos'
                    className='w-1/2 bg-zinc-300'
                />
                <button
                    onClick={handleAdd}
                    disabled={todo.length<=0}
                    className='bg-violet-800 disabled:bg-violet-900 hover:bg-violet-950 text-white font-bold text-sm rounded-md mx-6 px-2 py-1 cursor-pointer'
                >
                    Save
                </button>
            </div>

            <input
                type="checkbox" 
                checked={showFinished} 
                onChange={toggleFinished}
            /> Show Finished
            <h2 className='text-lg font-bold'>Your Todos</h2>

            <div className='todos'>

                {todos.length === 0 && <div className='m-5'>No Todos to diplay</div>}
                {todos.map(item=>{

                return(showFinished || !item.isCompleted) && <div key={item.id} className='todo w-1/2 my-2.5 flex justify-between'>
                    <div className='flex gap-5'>
                        <input 
                            type="checkbox"
                            name={item.id}
                            onChange={handleCheckbox}
                            checked={item.isCompleted}
                        />
                        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                    </div>

                    <div className='flex relative'>

                        <button
                            onClick={(e)=>{handleEdit(e, item.id)}}
                            className='btn bg-violet-800 hover:bg-violet-950 text-white font-bold text-sm rounded-md mx-2 px-2 py-1 cursor-pointer'
                        >
                            <FaEdit size={24} />
                        </button>

                        <button
                            onClick={(e)=>{handleDelete(e, item.id)}}
                            className='bg-violet-800 hover:bg-violet-950 text-white font-bold text-sm rounded-md mx-1 px-2 py-1 cursor-pointer'
                        >
                            <RiDeleteBinLine />
                        </button>
                    </div>

                </div>
                })}

            </div>

        </div>

    )

}

export default List