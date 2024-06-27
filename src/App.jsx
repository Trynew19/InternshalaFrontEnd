
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Signup from './components/student/Signup'
import SignIn from './components/student/SignIn'
import Home from "./components/Home"


const App = () => {
  return (
    <div className='w-full h-screen bg-black'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        
        <Route path='/C-signup' element={<Signup/>} />
        <Route path='/login' element={<SignIn/>} />
      </Routes>
      
    </div>
  )
}

export default App
