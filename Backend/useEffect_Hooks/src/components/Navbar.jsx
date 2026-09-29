import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    // Case 1: Run on every render
    useEffect(() => {
        alert("Hey I will run on every render")
    })

    // Case 2: Run only on first render
    useEffect(() => {
        alert("Hey welcome to my page.This is the first render")
    },  [])
    
    // Case 3: Run only when certain values change
    useEffect(() => {
        alert("Hey I am running because color was changed")
    }, [color])
    
    // Example of Cleanup function
    useEffect(() => {
        alert("Hey welcome to my page.This is the first render of app.jsx")

        return () => {
            alert("component was unmounted")
        }
    }, [])

    return (
        <div>
            <h1 className='text-white text-2xl mb-6 p-4 rounded bg-zinc-500'>I am a navbar {color} change</h1>
        </div>
    )
}

export default Navbar