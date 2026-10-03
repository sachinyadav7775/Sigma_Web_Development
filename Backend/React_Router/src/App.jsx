import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navber from './components/Navber'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {

  const router =  createBrowserRouter([
    {
      path:"/",
      element: <><Navber/><Home/></>
    },
    {
      path:"/login",
      element: <><Navber/><Login/></>
    },
    {
      path:"/about",
      element: <><Navber/><About/></>
    }
  ])

  return (
    <div className='bg-black w-full h-screen text-white'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App