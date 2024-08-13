import { useState } from 'react'
import navikenz_logo from '../assets/navikenz_logo.svg'
import nectarbot_logo from '../assets/nectarbot_logo.png'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const setToggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <>
            <div className="flex items-center justify-between bg-blue-500 absolute top-0 w-full">
                <div className="ml-8">
                    <img src={navikenz_logo} alt="Navikenz Logo" />
                </div>
                <div className="mr-36 bg-yellow-300">
                    <img src={nectarbot_logo} alt="Nectarbot Logo" height={30} width={160} />
                </div>
                <div className="mr-8 cursor-pointer" onClick={setToggleTheme}>
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                </div>
            </div>
        </>
    )
}

export default Navbar