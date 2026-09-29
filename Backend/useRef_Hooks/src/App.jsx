import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const btnRef = useRef()

  useEffect(() => {
    console.log(`First rendering....`)
    btnRef.current.style.backgroundColor = "navy"
  }, [])
  

  return (

    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>

      <div 
        className='text-white text-2xl mb-5 bg-zinc-500 p-4 rounded'
      >
        This is a counter 
        <span className='text-green-400 bg-black p-1 ml-2 rounded'>{count}</span> 
      </div>

      <button 
        ref={btnRef}
        onClick={() => {
          setCount(count + 1)
        }}
        className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
      >
        Click me 
      </button>

      <button 
        onClick={() => {
          btnRef.current.style.display = "none"
        }}
        className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 mt-4 rounded cursor-pointer'
      >
        Change me 
      </button>

    </div>

  )

}

export default App