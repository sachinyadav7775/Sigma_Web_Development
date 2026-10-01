import { useState } from 'react'

function App() {

  // const [name, setName] = useState("sky")
  const [form, setForm] = useState({email:"", phone:""})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (

    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>
      <div className='flex gap-5'>
        <input
          type="text" 
          name='email'
          value={form.email ? form.email:""}
          placeholder='your email' 
          onChange={handleChange}
          className='bg-zinc-500 p-3 rounded mb-4 text-white'
        />
        <input
          type="text" 
          name='phone'
          value={form.phone ? form.phone:""}
          placeholder='phone number' 
          onChange={handleChange}
          className='bg-zinc-500 p-3 rounded mb-4 text-white'
      />
      </div>

      <button 
        onClick={handleClick}
        className='border border-zinc-600 bg-zinc-700 text-xl font-medium active:scale-95 hover:bg-zinc-600 shadow-lg shadow-zinc-700/70 text-white px-4 py-2 rounded cursor-pointer'
      >
        Click me 
      </button>

    </div>

  )

}

export default App