import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full h-[40vh] flex bg-black px-5 '>
      <div className="address w-[33%] h-full text-white flex flex-col items-start justify-center gap-5 ">
        <h1 className='text-5xl'>Krishna</h1>
        <h1>M.P Nagar , Bhopal</h1>
        <p>www.krishna.com</p>
        <p>91+ 9984017881 
          
        </p>
        <p>chauhankrishana42@gmail.com</p>
        
      </div>
      <div className="links w-[34%] h-full text-white flex flex-col items-center justify-around  "  >
        <h1 className='text-4xl'>Quick Links</h1>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-3'>
              <h1>Home</h1>
              <h1>Jobs</h1>
              <h1>Companies</h1>
              <h1>Sites</h1>
              <h1>Career</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <h1>Learn</h1>
              <h1>Affiliate</h1>
              <h1>Legal</h1>
              <h1>Compliance</h1>
              <h1>Partners</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <h1>Docs</h1>
              <h1>Report</h1>
              <h1>Blogs</h1>
              
            </div>
          </div>
      </div>
      <div className="social w-[33%] h-full text-white flex flex-col items-center justify-around gap-5">
        <h1 className='text-5xl'>Social</h1>
        <div className='flex gap-5'>
        <NavLink className="text-5xl "><i className="ri-instagram-line"></i></NavLink>
        <NavLink className="text-5xl "><i className="ri-linkedin-box-line"></i></NavLink>
        <NavLink className="text-5xl "><i className="ri-facebook-box-line"></i></NavLink>
        <NavLink className="text-5xl "><i className="ri-twitter-x-line"></i></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
