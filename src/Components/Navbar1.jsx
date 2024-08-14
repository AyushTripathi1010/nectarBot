import { useState } from 'react';
import NavikenzLogo from '../assets/navikenz_logo.svg';
import NectarBotLogo from '../assets/nectarbot_logo.png';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon

function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-blue-600 text-white h-[50px] px-4 flex items-center relative">
      {/* Container for logos and profile info */}
      <div className="flex flex-1 items-center justify-between">
        {/* Navikenz Logo */}
        <img 
          src={NavikenzLogo} 
          alt="Navikenz Logo" 
          className="h-8 md:h-10" // Adjust size here
        />

        {/* Centered NectarBot Logo */}
        <div className="flex flex-1 justify-center">
          <img 
            src={NectarBotLogo} 
            alt="NectarBot Logo" 
            className="h-8 md:h-10" // Adjust size here
          />
        </div>

        {/* Profile Circle and Hamburger Button */}
        <div className="flex items-center space-x-2">
          {/* Hamburger Button */}
          <button
            onClick={togglePopup}
            className="text-white ml-4 p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
          
          {/* Profile Circle with Text */}
          <div className="relative flex items-center justify-center bg-gray-300 rounded-full h-8 w-8 md:h-10 md:w-10">
            <span className="text-black text-xs md:text-sm font-semibold">TT</span>
          </div>
        </div>
      </div>

      {/* Overlayed Popup */}
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
  );
}

export default Navbar;
