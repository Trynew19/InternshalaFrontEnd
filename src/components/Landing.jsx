const Landing = () => {
  return (
    <div className="Page1 w-full h-[90vh] bg-blue-100 flex">
        
        <div className="left w-1/2 h-full  flex flex-col items-start justify-center px-12   gap-6">
        <h1 className="text-6xl">There are <span className="text-blue-600">1,26,366</span>  job</h1> 
         <h1 className="text-6xl"><span className="text-blue-600">opportunities</span> for you</h1>
        <p className="text-2xl">Find jobs Employment and Career opportunities</p>
        
        <div className="py-2 px-5 rounded-md bg-white">
          <input className="outline-none py-2" type="text" placeholder="Job Title Locations " />
          <button className="py-2 px-7 rounded-md bg-blue-600 text-white text-2xl">Find</button>
        </div>
        </div>
        <div className="right w-1/2 h-full  flex items-center justify-center ">
        <img className="w-[645px]" src="/boys.png" alt="" />
        </div>
    </div>
  )
}

export default Landing
