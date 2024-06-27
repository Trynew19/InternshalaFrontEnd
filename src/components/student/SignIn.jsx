import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition transform hover:scale-105 duration-300">
      <button
          type="button"
          className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Sign In with Google
        </button>
      <div className="mt-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        
        <form>
          
          
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center">
          
          <Link to="/C-signup" className='text-blue-600 hover:underline' >Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
