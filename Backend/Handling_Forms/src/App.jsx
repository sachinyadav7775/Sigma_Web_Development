import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  } 

  return (

    <div className='w-full h-screen bg-gray-700 text-white flex items-center justify-center'>


      <form action="" onSubmit={handleSubmit(onSubmit)} className='border border-zinc-500 bg-gray-600 h-[40vh] p-12 rounded'>
      {isSubmitting && <div>Loading....</div>}

        <input 
          type="text" 
          placeholder='username' 
          {
            ...register("username",
              { 
                required: {value: true, message: "This field is required"},
                minLength: {value: 3, message: "Min length is 3"},
                maxLength: {value: 10, message: "Max length is 10"}
              }
            )
          }
          className='border border-zinc-600 bg-zinc-500 text-white py-2 px-4 rounded mb-4'
        />
        {errors.username && <div className='text-red-600'>{errors.username.message}</div>}

        <br />

        <input 
          type="password" 
          placeholder='password' 
          {...register("password")}
          className='border border-zinc-600 bg-zinc-500 text-white py-2 px-4 rounded mb-4'
        />

        <br />

        <input 
          type="submit" 
          value="Submit" 
          disabled={ isSubmitting }
          className='border border-zinc-600 py-2 px-4 cursor-pointer rounded bg-zinc-500'
        />

      </form>

    </div>

  )

}

export default App