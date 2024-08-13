import './App.css'
import Login from './Components/login'
import Navbar from './Components/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='text-white h-[100vh] flex justify-center items-center'>
        <Login />
      </div>
    </>
  )
}

export default App
