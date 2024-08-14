import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';
// import Home from './Components/Home.jsx';
import Home1 from './Components/Home1.jsx'

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false)
  return (
    <>
      <Navbar isLoggedin = {isLoggedin}/>
      <Routes>
        <Route path="/" element={
          <div className='text-white h-[100vh] flex justify-center items-center'>
            <Login setIsLoggedIn = {setIsLoggedIn} />
          </div>
        } />
        <Route path="/home" element={<Home1/>} />
      </Routes>
    </>
  );
}

export default App;