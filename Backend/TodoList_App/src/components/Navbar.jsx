import { RiMenuLine } from "@remixicon/react"

const Navbar = () => {

    return (
        <nav className='w-full bg-zinc-900 text-white shadow-lg'>

            <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-5 md:px-8'>

                {/* Logo */}
                <div className='text-2xl font-bold tracking-wide'>
                    <span className='text-violet-400'>Todo</span>App
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex'>
                    <ul className='flex items-center gap-10 text-sm font-medium text-zinc-300'>

                        <li className='cursor-pointer hover:text-white transition'>
                            Home
                        </li>

                        <li className='cursor-pointer hover:text-white transition'>
                            About us
                        </li>

                        <li className='cursor-pointer hover:text-white transition'>
                            Product
                        </li>

                        <li className='cursor-pointer hover:text-white transition'>
                            Services
                        </li>

                    </ul>
                </div>

                {/* Right Side */}
                <div className='flex items-center gap-4'>

                    <button
                        className='hidden md:block px-5 py-2 rounded-lg text-sm font-semibold
                        bg-violet-600 hover:bg-violet-700
                        transition duration-200 cursor-pointer shadow-md shadow-violet-900/30'
                    >
                        Login
                    </button>

                    <button
                        className='border border-zinc-700 bg-zinc-800
                        hover:bg-zinc-700 p-2.5 rounded-lg
                        transition duration-200 cursor-pointer'
                    >
                        <RiMenuLine size={22} />
                    </button>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
