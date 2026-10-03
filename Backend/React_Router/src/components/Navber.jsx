import { NavLink } from "react-router-dom"

const Navber = () => {

    return (

        <nav className="flex gap-8 p-5">

            <li className="list-none">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li className="list-none">
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white"
                    }
                >
                    Login
                </NavLink>
            </li>

            <li className="list-none">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-red-500" : "text-white"
                    }
                >
                    About
                </NavLink>
            </li>

        </nav>
    )
}

export default Navber
