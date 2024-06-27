import React from 'react'

const Step = () => {
  return (
    <div className='w-full h-[60vh]'>
      <div className="step w-[100%] h-[60vh] bg-white p-5 flex ">
        <div className="left w-1/2 h-full bg-blue-300"></div>
        <div className="right w-1/2 h-full  flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start ">
        <h1 className="text-5xl font-normal "><span className="text-7xl text-blue-600 font-medium">3</span>  Easy Step to Apply</h1>
        <p>Apply To Your dream jobs in just 3 easy steps</p>
        </div>

          <div className=" flex flex-col gap-2 text-2xl mt-12">
          <p>Search for relevant jobs in your field.</p>

          <p>Fill application form and attach resume.</p>
          <p>Use our experts advice and follow up.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step
