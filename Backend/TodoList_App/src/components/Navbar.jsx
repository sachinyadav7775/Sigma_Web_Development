import {RiMenuLine} from "@remixicon/react"

const Navbar = () => {

    return (

        <nav className='w-full flex items-center justify-between bg-zinc-700 py-6 px-6 md:px-36 z-10'>

            <div className='text-white text-2xl font-semibold'>TodoApp</div>

            <div className="hidden md:flex">
                <ul className='flex space-x-14 text-white text-xl'>
                    <li className='cursor-pointer hover:text-zinc-300'>Home</li>
                    <li className='cursor-pointer hover:text-zinc-300'>About us</li>
                    <li className='cursor-pointer hover:text-zinc-300'>Product</li>
                    <li className='cursor-pointer hover:text-zinc-300'>Services</li>
                </ul>
            </div>

            <div className='flex items-center space-x-10'>

                <button 
                    className='hidden md:block py-2 px-5 rounded text-xl text-zinc-300 bg-zinc-600 cursor-pointer border transition border-zinc-500 hover:bg-zinc-500'
                >
                    Login
                </button>

                <div className='border border-zinc-400 cursor-pointer text-zinc-300 rounded py-2 px-3'>
                    <RiMenuLine/>
                </div>

            </div>

        </nav>

    )

}

export default Navbar