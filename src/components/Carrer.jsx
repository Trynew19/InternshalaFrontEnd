import React from 'react'

const Carrer = () => {
  return (
    <div className='w-full h-[80vh]'>
      <div className=" w-full h-[90%] bg-white flex items-center justify-center ">
        <div className="card w-[90%] h-[95%] bg-blue-700 rounded-md shadow-2xl shadow-black flex flex-col items-center justify-center gap-5">
         <h1 className="text-7xl text-white  ">Start your <span className="text-yellow-500">Professional </span></h1>
          <h1 className="text-6xl text-white">Career with us</h1>
          <p className="text-white">Join our team now and make your dreams come true</p>
          <button className="py-1 px-5 bg-white text-blue-700 rounded-md" >Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Carrer
