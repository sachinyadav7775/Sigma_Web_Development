import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // useEffect(() => {
  //   alert("Hey welcome to my page")
  // }, [])

  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])
  
  return (
    
    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>

      <Navbar color={"navy" + "blue" + color}/>

      <div 
        className='text-white text-2xl mb-5 bg-zinc-500 p-4 rounded'
      >
        This is a counter  
        <span className='text-green-400 bg-black ml-2 p-1 rounded'>{count}</span> 
      </div>

      <button 
        onClick={() => {
          setCount(count + 1)
        }}
        className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
      >
        Click me 
      </button>

    </div>
  )

}

export default App