import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [showtbn, setShowtbn] = useState(true)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Hey is am a first todo",
      desc: "I am a good todo"
    },
    {
      id: 2,
      title: "Hey is am a second todo",
      desc: "I am a very good todo"
    },
    {
      id: 3,
      title: "Hey is am a third todo",
      desc: "I am a very very good todo"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (
      
  //     <div className="border border-fuchsia-600 text-white px-6 py-2 mb-3 rounded">
  //       <div className='todo'>{todo.title}</div>
  //       <div className='todo'>{todo.desc}</div>
  //     </div>
      
  //   )
  // }

  return (

    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>

      <div 
        className='text-white text-2xl mb-5 bg-zinc-500 p-4 rounded'
      >
        This is a counter 
        <span className='text-green-400 bg-black p-1 rounded'>{count}</span> 
      </div>

      {
        todos.map(todo => {

          // return <Todo key={todo.id} todo={todo}/>

          return (
              
            <div key={todo.id} className="border border-fuchsia-600 text-white px-6 py-2 mb-3 rounded">
              <div className='todo'>{todo.title}</div>
              <div className='todo'>{todo.desc}</div>
            </div>
              
          )

        })
        
      }

      {showtbn? <button 
          className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white mb-5 px-4 py-2 rounded cursor-pointer'
        >
          showbtn is true
        </button>: <button 
          className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white mb-5 px-4 py-2 rounded cursor-pointer'
        >
          showbtn is false
        </button>
      }

      {/* {showtbn && <button 
          className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white mb-5 px-4 py-2 rounded cursor-pointer'
        >
          showbtn is true
        </button> 
      } */}

      <button 
        onClick={() => {
          setShowtbn(!showtbn)
        }}
        className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
      >
        Toggle showbtn
      </button>

    </div>

  )

}

export default App