import { BiUser } from "react-icons/bi";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PropTypes from 'prop-types';

const Login = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Choose your Profile");
    const [inputText, setInputText] = useState({
        email: "",
        password: "",
        profile: ""
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const TogglePwdIcon = () => {
        setShowPassword(!showPassword);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputText((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you can send the credentials to the backend
        const response = await fetch('http://localhost:5000/api/login', { // Replace with your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputText.email,
                password: inputText.password,
                profile: selectedOption
            })
        });

        if (response.ok) {
            // Store credentials in local storage
            localStorage.setItem('userCredentials', JSON.stringify({
                email: inputText.email,
                password: inputText.password,
                profile: selectedOption
            }));

            // Changing Login UseState to true before redirecting to Home Page
            setIsLoggedIn(true)

            // Navigate to Home component
            navigate('/home');
        } else {
            // Handle error (show a message or something)
            console.error('Login failed');
        }
    };

    return (
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-55 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative my-10">
                        <input
                            type="email"
                            name="email"
                            required
                            className="block w-72 py-1 pr-11 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                            placeholder=""
                            value={inputText.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="" className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                        </label>
                        <BiUser className="absolute top-0 right-4" />
                    </div>

                    <div className="relative my-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            className="block w-72 py-1 pr-12 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                            placeholder=""
                            value={inputText.password}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="" className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                        <div onClick={TogglePwdIcon}>
                            {!showPassword ? <VisibilityIcon className="absolute -top-1 right-4 cursor-pointer" /> :
                                <VisibilityOffIcon className="absolute -top-1 right-4 cursor-pointer" />
                            }
                        </div>
                    </div>

                    <div className="relative my-4">
                        <div className="flex items-center justify-between w-72 pr-4 py-2 bg-transparent border-b-2 border-gray-300 text-white cursor-pointer"
                            onClick={toggleDropdown}>
                            {selectedOption}
                            <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {showDropdown && (
                            <div className="absolute z-10 w-72 bg-slate-800 border border-slate-400 rounded-md shadow-lg max-h-48 overflow-y-auto hover:bg-black cursor-pointer ">
                                <div className="py-2">
                                    <div className="px-4 py-2 hover:bg-slate-700" onClick={() => selectOption('Developer or Data Scientist')}>Developer or Data Scientist</div>
                                    <div className="px-4 py-2 hover:bg-slate-700" onClick={() => selectOption('Business Analyst')}>Business Analyst</div>
                                    <div className="px-4 py-2 hover:bg-slate-700" onClick={() => selectOption('HR')}>HR</div>
                                    <div className="px-4 py-2 hover:bg-slate-700" onClick={() => selectOption('Marketing')}>Marketing</div>
                                    <div className="px-4 py-2 hover:bg-slate-700" onClick={() => selectOption('Call Center Agent')}>Call Center Agent</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white py-2 transition-colors duration-300">Login</button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;