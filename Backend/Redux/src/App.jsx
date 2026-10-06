// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement , increment } from './redux/counter/counterSlice'

function App() {

  // const [count, setCount] = useState(0)
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (

    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>

      <div 
        className='text-white text-2xl mb-5 bg-zinc-500 p-4 rounded'
      >
        This is a counter 
        <span className='text-green-400 bg-black p-1 rounded ml-2'>{count}</span> 
      </div>

      <div className='flex gap-5'>
        <button 
          onClick={() => dispatch(increment())}
          className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
        >
          +
        </button>
        
        <button 
          onClick={() => dispatch(decrement())}
          className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
        >
          -
        </button>
      </div>

    </div>

  )

}

export default App