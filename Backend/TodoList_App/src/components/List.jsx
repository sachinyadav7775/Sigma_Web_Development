import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RiDeleteBinLine } from '@remixicon/react'
import { FaEdit } from 'react-icons/fa'

const List = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setShowFinished] = useState(true)

    // Get todos from localStorage
    useEffect(() => {
        const todoString = localStorage.getItem("todos")

        if (todoString) {
            setTodos(JSON.parse(todoString))
        }
    }, [])

    // Save todos to localStorage
    const saveToLs = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }

    // Add Todo
    const handleAdd = () => {

        if (todo.trim() === "") return

        const newTodos = [
            ...todos,
            {
                id: uuidv4(),
                todo: todo.trim(),
                isCompleted: false
            }
        ]

        setTodos(newTodos)
        saveToLs(newTodos)
        setTodo("")
    }

    // Show / Hide completed todos
    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }

    // Edit Todo
    const handleEdit = (e, id) => {

        const t = todos.find(item => item.id === id)

        if (t) {
            setTodo(t.todo)
        }

        const newTodos = todos.filter(item => item.id !== id)

        setTodos(newTodos)
        saveToLs(newTodos)
    }

    // Delete Todo
    const handleDelete = (e, id) => {

        const newTodos = todos.filter(item => item.id !== id)

        setTodos(newTodos)
        saveToLs(newTodos)
    }

    // Input change
    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    // Checkbox
    const handleCheckbox = (e) => {

        const id = e.target.name

        const newTodos = todos.map(item => {

            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }

            return item
        })

        setTodos(newTodos)
        saveToLs(newTodos)
    }

    return (

        <div className='min-h-[calc(100vh-72px)] bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 py-10 px-4'>

            <div className='max-w-4xl mx-auto'>

                {/* Main Card */}
                <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white p-6 md:p-8'>

                    {/* Heading */}
                    <div className='mb-8'>

                        <h1 className='text-3xl md:text-4xl font-bold text-zinc-800'>
                            My Todo List
                        </h1>

                        <p className='text-zinc-500 mt-2'>
                            Organize your tasks and stay productive 🚀
                        </p>

                    </div>

                    {/* Add Todo */}
                    <div className='bg-violet-50 rounded-xl p-5 border border-violet-100'>

                        <h2 className='text-lg font-bold text-zinc-800 mb-3'>
                            Add a new task
                        </h2>

                        <div className='flex flex-col sm:flex-row gap-3'>

                            <input
                                type="text"
                                value={todo}
                                onChange={handleChange}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleAdd()
                                    }
                                }}
                                placeholder='What needs to be done?'
                                className='flex-1 bg-white border border-zinc-200
                                focus:border-violet-500 focus:ring-2 focus:ring-violet-200
                                outline-none px-4 py-3 rounded-lg
                                text-zinc-700 transition'
                            />

                            <button
                                onClick={handleAdd}
                                disabled={todo.trim().length <= 0}
                                className='bg-violet-600 hover:bg-violet-700
                                disabled:bg-violet-300 disabled:cursor-not-allowed
                                text-white font-semibold px-6 py-3 rounded-lg
                                transition duration-200 shadow-md shadow-violet-200'
                            >
                                Add Task
                            </button>

                        </div>

                    </div>

                    {/* Todo Header */}
                    <div className='flex items-center justify-between mt-8 mb-4'>

                        <div>
                            <h2 className='text-xl font-bold text-zinc-800'>
                                Your Todos
                            </h2>

                            <p className='text-sm text-zinc-500 mt-1'>
                                {todos.length} {todos.length === 1 ? "task" : "tasks"} total
                            </p>
                        </div>

                        {/* Show Finished */}
                        <label className='flex items-center gap-2 text-sm text-zinc-600 cursor-pointer select-none'>

                            <input
                                type="checkbox"
                                checked={showFinished}
                                onChange={toggleFinished}
                                className='w-4 h-4 accent-violet-600 cursor-pointer'
                            />

                            Show completed

                        </label>

                    </div>

                    {/* Todo List */}
                    <div className='space-y-3'>

                        {todos.length === 0 && (

                            <div className='text-center py-12 bg-zinc-50 rounded-xl border border-dashed border-zinc-200'>

                                <div className='text-4xl mb-3'>
                                    📝
                                </div>

                                <h3 className='font-semibold text-zinc-700'>
                                    No todos yet
                                </h3>

                                <p className='text-sm text-zinc-400 mt-1'>
                                    Add your first task above.
                                </p>

                            </div>

                        )}

                        {todos.map(item => {

                            return (
                                (showFinished || !item.isCompleted) &&

                                <div
                                    key={item.id}
                                    className={`group flex items-center justify-between gap-4
                                    p-4 rounded-xl border transition duration-200
                                    ${
                                        item.isCompleted
                                            ? 'bg-green-50 border-green-100'
                                            : 'bg-white border-zinc-200 hover:border-violet-300 hover:shadow-md'
                                    }`}
                                >

                                    {/* Todo Content */}
                                    <div className='flex items-center gap-3 min-w-0'>

                                        <input
                                            type="checkbox"
                                            name={item.id}
                                            onChange={handleCheckbox}
                                            checked={item.isCompleted}
                                            className='w-5 h-5 accent-violet-600 cursor-pointer shrink-0'
                                        />

                                        <div
                                            className={`break-words ${
                                                item.isCompleted
                                                    ? 'line-through text-zinc-400'
                                                    : 'text-zinc-700'
                                            }`}
                                        >
                                            {item.todo}
                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className='flex items-center gap-2 shrink-0'>

                                        <button
                                            onClick={(e) => handleEdit(e, item.id)}
                                            title='Edit'
                                            className='p-2 rounded-lg text-violet-600
                                            bg-violet-50 hover:bg-violet-100
                                            transition cursor-pointer'
                                        >
                                            <FaEdit size={18} />
                                        </button>

                                        <button
                                            onClick={(e) => handleDelete(e, item.id)}
                                            title='Delete'
                                            className='p-2 rounded-lg text-red-500
                                            bg-red-50 hover:bg-red-100
                                            transition cursor-pointer'
                                        >
                                            <RiDeleteBinLine size={20} />
                                        </button>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default List