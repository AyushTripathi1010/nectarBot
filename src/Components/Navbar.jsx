import { useState } from 'react'
import navikenz_logo from '../assets/navikenz_logo.svg'
import nectarbot_logo from '../assets/nectarbot_logo.png'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa'
import PropTypes from 'prop-types';

const Navbar = ({isLoggedin}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const setToggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <div className="flex items-center justify-between bg-blue-500 fixed top-0 w-full">
                <div className="ml-8">
                    <img src={navikenz_logo} alt="Navikenz Logo" />
                </div>
                <div className="mr-36 bg-yellow-300">
                    <img src={nectarbot_logo} alt="Nectarbot Logo" height={30} width={160} />
                </div>

                <div className="flex items-center justify-between mr-8">
                    <div className="cursor-pointer" onClick={setToggleTheme}>
                        {isDarkMode ? <FaMoon /> : <FaSun />}
                    </div>
                    {
                        isLoggedin &&
                        (
                            <div className='flex item-center justify-between'>
                                <button
                                    onClick={togglePopup}
                                    className="text-white ml-4 p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    <FaBars size={24} />
                                </button>

                                <div className="relative flex items-center justify-center bg-gray-300 rounded-full h-8 w-8 md:h-10 md:w-10">
                                    <span className="text-black text-xs md:text-sm font-semibold">TT</span>
                                </div>
                            </div>


                        )


                    }
                </div>

                {isPopupOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-md w-80 max-w-sm relative">
                            <button
                                onClick={togglePopup}
                                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                            >
                                &times;
                            </button>
                            <h3 className="text-lg font-semibold">Popup Content</h3>
                            <p className="mt-2">This is the content of the overlayed popup.</p>
                            {/* Add more content or components here */}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}


Navbar.propTypes = {
    isLoggedin: PropTypes.bool.isRequired,
  };

export default Navbar