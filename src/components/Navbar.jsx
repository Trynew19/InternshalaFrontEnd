import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' w-full h-auto  flex items-center justify-center bg-blue-200 p-3'>
      <div className="left w-[60%] h-full flex items-center justify-center gap-10">
        <h2 className='text-5xl'>Krishna</h2>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" to="/" >Home</NavLink>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" >Career</NavLink>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" >Find Jobs</NavLink>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" >Recruiters</NavLink>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" >Learn</NavLink>
       <NavLink className="hover:text-red-500 hover:scale-105 font-medium" >Blog</NavLink>
      </div>
      <div className="right w-[40%] h-full flex items-center justify-end gap-5 ">
        <NavLink className='py-1 px-5 rounded border border-blue-400 text-blue-600 hover:scale-105 ' to="/login">Login</NavLink>
        <NavLink className='py-1 px-5 rounded  text-white bg-blue-600 hover:scale-105 ' to="/C-signup"> Sign up</NavLink>
        <NavLink className='py-1 px-5 rounded   text-white bg-blue-600 hover:scale-105' to="/E-signup">Post Job</NavLink>
      </div>
    </div>
  )
}

export default Navbar
